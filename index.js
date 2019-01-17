const express = require('express');
const path = require('path');
const db = require('./db/index.js');
const app = express();

app.use('/', express.static(path.join(__dirname, 'client/dist')));

app.get('/story/:name', (req, res) => {
  res.send('this is a story all about how...');
})

app.listen(3030, () => {
  console.log('listening on port 3030')
})
