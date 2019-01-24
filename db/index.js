

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/story');
const db = mongoose.connection;


db.on('error', () => {console.log('error')});
db.once('open', () => {
  console.log('connected to mongo');
})


const Schema = mongoose.Schema;
const storySchema = new Schema({
  kind: String,
  title: String,
  author: String,
  url: String,
  createdAt: {type: Date}
})

const Story = mongoose.model('Story', storySchema);

module.exports = Story;
