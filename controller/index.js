const Story = require('../db/index.js');


module.exports.create = (req, res) => {
  const story = new Story(req.body);
  story.save((err) => {
    if (err) {
      console.log('failed to save to database: ', err);
      res.status(403).send();
    } else {
      console.log('saved to database');
      res.status(201).send();
    }
  })
}

module.exports.put = (res, req) => {

}

module.exports.read = (req, res) => {
  const kind = 'story'

  Story.find({kind}, (err, docs) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200).json(docs);
      console.log('retrieved docs: ', docs);
    }
  })
}
