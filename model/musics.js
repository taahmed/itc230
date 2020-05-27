const credentials = require("../config/keys");
const mongoose = require("mongoose");

mongoose.connect(credentials.mongouri, { dbName: 'musics', useNewUrlParser: true});

// local db settings 
// var ip = process.env.IP || '127.0.0.1';
// mongoose.connect('mongodb://' +ip+ '/itc230');

mongoose.connection.on('open', () => {
    console.log('Mongoose connected.');
});

const musicSchema = new mongoose.Schema({
    musicid:String,
    title: String,
    type: String,
    year: String,
    publisher: String,
});

module.exports = mongoose.model('Sccproject', musicSchema);