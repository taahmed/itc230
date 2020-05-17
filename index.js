'use strict'

// Application Dependencies
const http = require("http");
const musics = require('./data.js');
const express = require("express");
const bodyParser = require("body-parser")
const exphbs = require("express-handlebars"); 

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


// send static file as response
app.get('/home.html', (request, response) => {
  response.type('text/html');
  response.sendFile(__dirname + '/public/home.html');
});

// send content of 'home' view as HTML response
app.get('/', (request, response) => {
  response.render('home', {musics: all});
});

// send content of 'home' view 
app.get('/details', (request, response) => {
  let title = request.query.title;
  let album = musics.getItem(title);
  console.log(album);
  response.render('details', { title: title, album: album });
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
});


app.listen(app.get('port'), () => {
  console.log('Express started'); 
});