const fs = require('fs');
const path = require('path');
const https = require('https');
const { parse } = require('url');

const options = {
  key: fs.readFileSync('localhost-privkey.pem'),
  cert: fs.readFileSync('localhost-cert.pem')
};

https.createServer(options, (req, res) => {
  const { pathname } = parse(req.url);
  res.setHeader('Content-Type', 'text/plain');
  if (pathname === '/') {
    res.end('Index');
  } else if (pathname === '/web') {
    res.end('Web');
  } else if (pathname === '/json') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ json: 'sample' }));
  } else if (pathname === '/favicon.ico') {
    const imgFilePath = path.join(__dirname, './entries/assets/src/icon/favicon.png');
    const imgFile = fs.readFileSync(imgFilePath);
    res.setHeader('Content-Type', 'image/png');
    res.end(imgFile);
  } else if (pathname === '/html') {
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body>Hello<div id="root></div></body></html>');
  }
}).listen(3000);
