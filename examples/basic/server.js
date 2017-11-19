/* eslint-disable */
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(context, 'examples/basic/styleguide')))
  .get('*', function (req, res) {
    res.sendFile(path.join(context, 'examples/basic/styleguide/index.html'));
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
