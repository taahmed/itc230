const Music = require("../model/musics");
// return all records
Music.find({}).lean()
  .then((musics) => {
    console.log(musics);
  })
  .catch(err => next(err));