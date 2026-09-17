// Local preview only: node serve.js [port]  -> serves this folder
const http = require('http'), fs = require('fs'), path = require('path');
const port = Number(process.argv[2]) || 5199, root = __dirname;
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.yml': 'text/yaml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.md': 'text/markdown' };
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  let fp = path.normalize(path.join(root, p));
  if (!fp.startsWith(root)) { res.writeHead(403); return res.end(); }
  try { if (fs.statSync(fp).isDirectory()) fp = path.join(fp, 'index.html'); } catch (e) { }
  fs.readFile(fp, (e, b) => {
    if (e) { res.writeHead(404); return res.end('not found'); }
    res.writeHead(200, { 'Content-Type': types[path.extname(fp).toLowerCase()] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    res.end(b);
  });
}).listen(port, () => console.log('site on http://localhost:' + port));
