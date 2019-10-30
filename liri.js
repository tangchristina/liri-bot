//npm installations required

require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require('node-spotify-api');

//var spotify = new Spotify(keys.spotify);

//setting the command to the third item the user types into the command line
var command = process.argv[2];
var secondCommand = process.argv[3];





// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
// Enables liri bot to be able to take in multiple words 
for (var i = 4; i < process.argv.length; i++) {

  if (i > 3 && i < process.argv.length) {
    secondCommand = secondCommand + "+" + process.argv[i];
  } else {
    secondCommand += process.argv[i];

  }
}

//Function that fetches IMDB information when user inputs get-movie
function getMovie() {
// Then run a request with axios to the OMDB API with the movie specified
var movieName = secondCommand;
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log('================ Movie Info ================');
    console.log("Title: " + response.data.Title);
    console.log("Release Year: " + response.data.Year);
    console.log("imdb Rating: " + response.data.imdbRating);
    console.log("Rotten Tomatoes Rating: " + response.data.Ratings[2].Value);
    console.log('============================================')
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });
}

function getConcert() {
var bandName = secondCommand;
var queryUrl = "https://rest.bandsintown.com/artists/" + bandName + "/events?app_id=codingbootcamp";

axios.get(queryUrl).then(
    function(response) {
      console.log('================ Band Info ================');
      console.log("Venue name: " + response.data.venue.name);
      console.log("Location: " + response.data.city + ", " + response.data.region + ", " + response.data.country);
      console.log("Date: " + response.data.datetime);
      console.log('============================================')
    })
    .catch(function(error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an object that comes back with details pertaining to the error that occurred.
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

//Function that reads the existing random.txt file
function getAction() {
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
          return console.log(err);
        }
        data = data.split(", ");
        console.log(data);
    });
}

  switch (command) {
    case('get-concert'):
    getConcert();
    break;
    
    case('spotify-this-song'):
    if(secondCommand) {
        getSpotify(secondCommand);
    } else {
        getSpotify("The Sign");
    }
    break;
    
    case('get-movie'):
    getMovie();
    break;
    
    case('do-what-it-says'):
    getAction();
    break;
} 
