const express = require("express");
const path = require('path');

const app = express();

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'), {}, function (err) {
    if (err) {
      console.error('err', err);
      res.sendStatus(err.status).end();
    }
  });
});

app.listen(8001);