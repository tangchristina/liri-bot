require("dotenv").config();

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

//setting the command to the third item the user types into the command line
var command = process.argv[2];
var secondCommand = process.argv[3];
switch (command) {
    case('concert-this'):
    getConcerts();
    break;
    case('spotify-this-song'):
    getSpotify(secondCommand);
    break;
    case('movie-this'):
    getMovie();
    break;
    case('do-what-it-says'):
    getAction();
    break;
}


// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
// Enables liri bot to be able to take in multiple words 
for (var i = 4; i < process.argv.length; i++) {

  if (i > 4 && i < process.argv.length) {
    secondCommand = secondCommand + "+" + process.argv[i];
  } else {
    secondCommand += process.argv[i];

  }
}

// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log("Release Year: " + response.data.Year);
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