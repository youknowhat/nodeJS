const express = require('express')
const proxy = require('http-proxy-middleware')
const http= require('http')
const https = require('https')
const path = require('path');
const fs = require('fs')
const httpApp = express();
const httpsApp = express();

const options = {
  key: fs.readFileSync(path.join(__dirname, '../localhost-privkey.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../localhost-cert.pem'))
};

httpsApp.use('/', proxy({ target: 'https://www.wadiz.kr', changeOrigin: true }))

httpApp.get('/*', function(req, res) {
  res.redirect('https://localhost' + req.url)
})

http.createServer(httpApp).listen(80)
https.createServer(options, httpsApp).listen(443)
