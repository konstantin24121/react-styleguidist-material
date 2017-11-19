/* eslint-disable */
const path = require('path');
const express = require('express');

const server = express();

const port = 3000;
const context = process.cwd();

server.use(express.static(path.join(context, 'examples/basic/styleguide')));
server.listen(port, function (err) {
  if (err) {
    return console.error(err);
  }

  console.info(`=> 💻  Listening on ${port}`);
});
