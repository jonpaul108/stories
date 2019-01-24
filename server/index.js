const express = require('express');
const path = require('path');
const db = require('../controller/index.js');
const bodyParser = require('body-parser');
const app = express();

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json());

app.get('/story/:title', (req, res) => {
  res.send('this is a story all about how...');
})

app.get('/sideList/:kind', (req, res) => {
  res.send('this is a story all about how...');
})

app.post('/new/story/:title', (req, res) => {
  db.create(req, res);

})

app.post('/new/blog/:title', (req, res) => {
  res.send('received blog post');
})

app.get('/retrieve/stories', (req, res) => {
  db.read(req, res);
})
app.listen(3030, () => {
  console.log('listening on port 3030')
})
