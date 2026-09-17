// Zero-dependency checks for the site. Run with: npm test
// Fails (exit 1) on anything that would break the live page or the admin editor.
const fs = require('fs');
const path = require('path');
const root = __dirname;
let failures = 0;
const ok = (msg) => console.log('  ok   ' + msg);
const fail = (msg) => { failures++; console.log('  FAIL ' + msg); };
const check = (cond, msg) => (cond ? ok(msg) : fail(msg));
const read = (p) => fs.readFileSync(path.join(root, p), 'utf8');
const exists = (p) => fs.existsSync(path.join(root, p));

const SHOP = {
  phone: '(205) 746-1847', telDigits: '2057461847',
  street: '8716 Circle Dr', zip: '35022',
  oldPhone: '491-2611', oldStreet: 'Brooklane',
  domain: 'www.macautoandcollision.com',
  repo: 'alexmcconathy/mac-auto-collision-site'
};

console.log('content/*.json');
function json(p, required) {
  let data;
  try { data = JSON.parse(read(p)); ok(p + ' parses'); }
  catch (e) { fail(p + ' does not parse: ' + e.message); return null; }
  for (const key of required) check(key in data, p + ' has "' + key + '"');
  return data;
}
const settings = json('content/settings.json', ['phone', 'email', 'hours', 'about']);
if (settings) {
  check(/^\(\d{3}\) \d{3}-\d{4}$/.test(settings.phone), 'settings.phone looks like (xxx) xxx-xxxx');
  check(/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(settings.email), 'settings.email looks like an email address');
  check(settings.hours && settings.hours.weekday_open && settings.hours.weekday_close, 'settings.hours has weekday_open/weekday_close');
}
const gallery = json('content/gallery.json', ['items']);
if (gallery) {
  check(Array.isArray(gallery.items), 'gallery.items is a list');
  (gallery.items || []).forEach((it, i) => {
    const has = it.image || (it.before && it.after);
    check(!!it.title, 'gallery item ' + (i + 1) + ' has a title');
    check(!!has, 'gallery item ' + (i + 1) + ' has an image or a before+after pair');
    ['image', 'before', 'after'].forEach((k) => {
      if (it[k] && !/^(https?:|data:)/.test(it[k])) check(exists(it[k].replace(/^\//, '')), 'gallery item ' + (i + 1) + ' file exists: ' + it[k]);
    });
  });
}
const testimonials = json('content/testimonials.json', ['items']);
if (testimonials) (testimonials.items || []).forEach((it, i) => check(it.name && it.quote, 'review ' + (i + 1) + ' has name and quote'));
if (exists('content/faq.json')) {
  const faq = json('content/faq.json', ['items']);
  if (faq) (faq.items || []).forEach((it, i) => check(it.question && it.answer, 'faq ' + (i + 1) + ' has question and answer'));
}

console.log('index.html');
const html = read('index.html');
['top', 'services', 'process', 'insurance', 'about', 'gallery', 'reviews', 'estimate', 'contact', 'estimateForm', 'formMsg', 'announce', 'aboutText', 'galleryGrid', 'reviewGrid']
  .forEach((id) => check(html.includes('id="' + id + '"'), 'has #' + id));
check(!html.includes(SHOP.oldPhone), 'no old phone number (' + SHOP.oldPhone + ')');
check(!html.includes(SHOP.oldStreet), 'no old street (' + SHOP.oldStreet + ')');
check(html.includes(SHOP.phone), 'shows ' + SHOP.phone);
check(html.includes(SHOP.street) && html.includes(SHOP.zip), 'shows ' + SHOP.street + ' / ' + SHOP.zip);
const telLinks = html.match(/href="tel:[^"]+"/g) || [];
check(telLinks.length > 0 && telLinks.every((t) => t.includes(SHOP.telDigits)), 'every tel: link dials ' + SHOP.telDigits + ' (' + telLinks.length + ' links)');
const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
check(ldBlocks.length >= 1, 'has JSON-LD structured data');
ldBlocks.forEach((b, i) => { try { const j = JSON.parse(b); ok('JSON-LD block ' + (i + 1) + ' parses (' + j['@type'] + ')'); if (j['@type'] === 'AutoBodyShop') { check(j.telephone.replace(/\D/g, '').endsWith(SHOP.telDigits), 'JSON-LD phone matches'); check(j.address.streetAddress === SHOP.street, 'JSON-LD street matches'); } } catch (e) { fail('JSON-LD block ' + (i + 1) + ' invalid: ' + e.message); } });
check(html.includes('rel="canonical" href="https://' + SHOP.domain + '/"'), 'canonical link is https://' + SHOP.domain + '/');
check(html.includes('content/settings.json') && html.includes('content/gallery.json') && html.includes('content/testimonials.json'), 'page loads the three content files');
// every local asset the page references must exist
const localRefs = [...html.matchAll(/(?:src|href)="([^"#:?]+\.(?:png|jpg|jpeg|webp|svg|ico|css|js|json|xml|txt|webmanifest))"/g)].map((m) => m[1]).filter((u) => !u.startsWith('data:'));
localRefs.forEach((u) => check(exists(u.replace(/^\//, '')), 'referenced file exists: ' + u));

console.log('admin/');
check(exists('admin/index.html') && read('admin/index.html').includes('sveltia-cms'), 'admin page loads Sveltia CMS');
const cfg = read('admin/config.yml');
check(cfg.includes('name: github') && cfg.includes('repo: ' + SHOP.repo), 'admin/config.yml points at ' + SHOP.repo);
check(cfg.includes('file: "content/settings.json"') && cfg.includes('file: "content/gallery.json"') && cfg.includes('file: "content/testimonials.json"'), 'admin edits the three content files');
check(!cfg.includes('git-gateway'), 'admin does not use deprecated git-gateway');
check(/auth_methods:\s*\[\s*token\s*\]/.test(cfg), 'admin shows token sign-in only (OAuth button would dead-end without an authenticator)');

console.log('hosting');
check(exists('CNAME') && read('CNAME').trim() === SHOP.domain, 'CNAME is ' + SHOP.domain);
check(exists('.nojekyll'), '.nojekyll present');
if (exists('sitemap.xml')) check(read('sitemap.xml').includes('https://' + SHOP.domain + '/'), 'sitemap lists the site URL');
if (exists('robots.txt')) check(read('robots.txt').includes('Sitemap: https://' + SHOP.domain + '/sitemap.xml'), 'robots.txt points at the sitemap');

console.log('');
if (failures) { console.log(failures + ' check(s) FAILED'); process.exit(1); }
console.log('All checks passed.');
