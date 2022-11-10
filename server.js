const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const app = express();

const forceSSL = function () {
  return function (req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      return res.redirect(
        ['https://', req.get('Host'), req.url].join('')
      );
    }
    next();
  }
};
app.use(express.static('./dist/'));

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: 'dist/' });
});

app.use(forceSSL());

app.listen(process.env.PORT || 8080);