'use strict'

// Application Dependencies
const http = require("http");
const musics = require('./data.js');
const express = require("express");
const bodyParser = require("body-parser")
const exphbs = require("express-handlebars"); 
const mongoose = require("mongoose");

//defines connection to db
const Music = require("./model/musics");

// initialize express server
const app = express();

// get data
var all = musics.getAll();

// Configure application
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public')); // set location for static files
app.use(bodyParser.urlencoded({extended: true})); // parse form submissions
app.engine('handlebars', exphbs({defaultLayout: false}));
app.set("view engine", "handlebars");
app.use(bodyParser.json());

// send static file as response
app.get('/home.html', (request, response) => {
  response.type('text/html');
  response.sendFile(__dirname + '/public/home.html');
});

// send content of 'home' view as HTML response
app.get('/', (request, response) => {
  return Music.find({}).lean()
  .then((musics) => {
    console.log(musics);
    response.render('home_react', {items: JSON.stringify(musics)});
    //response.render('home', {musics: musics}); 
  })
  .catch(err => next(err));
});

app.get('/api/musics', (request, response) => {
  return Music.find({}).lean()
  .then((musics) => {
    console.log(musics);
    response.json(musics)
  })
  .catch(err => console.log(err));
});
// send content of 'home' view 
app.get('/details', (request, response) => {
  let title = request.query.title; 

// return a single record
  Music.findOne({title: title }).lean()
  .then((music) => {
    response.render('details', {music: music });
    console.log(music);
  })
  .catch(err => next(err));
});

//
app.get('api/musics/:title', (request, response) => {
  let title = request.params.title;
    //let music = all[index];
  Music.findOne({"title":title}).lean()
  .then((music) => {
    response.json(music)
    console.log(music);
  })
  .catch(err => console.log(err));
  })

// insert or update a single record
app.post('/api/add', (request, response) => {
  const newMusic= request.body;
  delete newMusic["_id"]
  Music.updateOne({'title':newMusic.title}, newMusic, {upsert:true}, (err, result) => {
    if (err) console.log(err); 
    console.log(result);     
    response.json(result);
    
  }); 
  });

// delete route
app.get('/api/delete', (request, response) => {
  let title = request.query.title;
  console.log(title);
  Music.deleteOne({'title':title}).lean()
  .then((musics) => {
    console.log(musics);
    response.json(musics)  
    
       
  })
  .catch(err => console.log(err));    
});

// send plain text response
app.get('/about', (request, response) => {
  response.type('text/plain');
  response.send('About page');
});

// define 404 handler - 404 Not Found
app.use( (request,response) => {
  response.type('text/plain'); 
  response.status(404);
  response.send('404 - Not found');
})
app.listen(app.get('port'), () => {
  console.log('Express started'); 
});