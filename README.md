# liri-bot
# DEPLOYMENT
https://tangchristina.github.io/liri-bot/

# Introduction
The Liri node bot application is similar to Apple's Siri app, taking in user commands to perform useful tasks. However, rather than taking user input from speech, it takes the input via the command line on terminal/gitbash. Liri is capable of fetching IMDB, Spotify, BandsinTown information, as well as displaying random text from a text file. 

# Prerequisites
-Node.js

Install node package modules (npm install) from the following:
-Axios: grabs data from the OMDB API and BandsinTown API
-Moment: used to convert to date format when displaying concert information
-node-spotify-api: fetches data from the Spotify API
-dotenv: file that holds private API keys and to set what are known as environment variables to the global `process.env` object in node

# Instructions
Type node + root file path + command + second command into the command line to display the data you want to access.

node liri.js get-concert:
Displays concert location, date and time, and venue name

node liri.js get-movie:
Displays movie title, release year, IMDB rating, and Rotten Tomatoes rating. If no movie is provided, the program will default to "Mr. Nobody".

node liri.js get-spotify:
Displays the song's artist, song name, a preview link of the song from Spotify, and the album. If no song is provided, then the program will default to "The Sign" by Ace of Base

node liri.js do-what-it-says: 
Displays text from the random.txt file