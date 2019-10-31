# liri-bot
# DEPLOYMENT
https://tangchristina.github.io/liri-bot/

# Introduction
The Liri node bot application is similar to Apple's Siri app, taking in user commands to perform useful tasks. However, rather than taking user input from speech, it takes the input via the command line on terminal/gitbash. Liri is capable of fetching IMDB, Spotify, BandsinTown information, as well as displaying random text from a text file. 

# Prerequisites
-Node.js

Install node package modules (npm install) from the following:
1. Axios: grabs data from the OMDB API and BandsinTown API
2. Moment: used to format date when displaying concert information
3. node-spotify-api: fetches data from the Spotify API
4. fs: accesses external files and pulls information
5. dotenv: file that hides private API keys and to set what are known as environment variables to the global `process.env` object in node


# Instructions
Type node liri.js <a command listed below> into the command prompt to display the data you want to access.

'node liri.js get-concert'
Displays concert location, date and time, and venue name
![](https://github.com/tangchristina/liri-bot/blob/master/bandsintowngif.gif)

'node liri.js get-movie'
Displays movie title, release year, IMDB rating, country, plot, language, actors, and Rotten Tomatoes rating. If no movie is provided, the program will default to "Mr. Nobody".


'node liri.js get-spotify'
Displays the song's artist, song name, a preview link of the song from Spotify, and the album. If no song is provided, then the program will default to "The Sign" by Ace of Base
![](https://github.com/tangchristina/liri-bot/blob/master/bandsintowngif.gif)

'node liri.js do-what-it-says' 
Displays text from the random.txt file
![](https://github.com/tangchristina/liri-bot/blob/master/randomtxtgif.gif)
