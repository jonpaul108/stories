

const mongoose = require('mongoose');
console.log('on mongoose page');

mongoose.connect('mongodb://localhost/story');
db = mongoose.connection;


db.on('error', () => {console.log('error')});
db.once('open', () => {
  console.log('connected to mongo');
})


const Schema = mongoose.Schema;
const storySchema = new Schema({
  title: String,
  author: String,
  body: String,
  comments: [{body: String, date: Date }],
  date: {type: Date, default: Date.now},
  meta: {
    votes: Number,
    favs: Number
  }
})

const Story = mongoose.model('Story', storySchema);

module.exports = db;
