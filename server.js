const fs = require('fs');
const path = require('path');
const http = require('http');
const { parse } = require('url');

const example = require('./example').default;

http.createServer((req, res) => {
  const { pathname } = parse(req.url);
  res.setHeader('Content-Type', 'text/plain');
  if (pathname === '/') {
    res.end('Index');
  } else if (pathname === '/Web') {
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
  } else if (pathname === '/ssr') {
    res.setHeader('Content-Type', 'text/html');
    res.end(example);
  }
}).listen(3000);
