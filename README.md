# Find A Pet

**Authors**: Anthony Lopez, Araceli Garcia & Casey Glidewell
**Version**: 1.0.0

## Overview

Find A Pet is a web app that uses Purina's API, Petfinder <!--(https://www.petfinder.com/developers/)--> to provide data on pets that are ready for adoption!

With the Petfinder API, you can:

Search for and display pet listings based on pet characteristics, location, and status.

Search for and display animal welfare organizations based on organization name, ID, and location

The Web app will also allow users to login and search and favorite any pets to be saved on their profile with the use of MongoDBs database.

## Getting Started
The application is entirely usable online through the use of a standard web browser. The website is hosted at https://aacfindapet.netlify.app/

Select one of the animal radio buttons, select a distance and location you would like to limit results to, (take note of the formatting listed below the prompt if you search by city!) fill out any wanted optional parameters, and then click the Search For Pets! button to be served results of pets that meet your requirements.

There is also functionality for saving pets if you log in using a google account. Clicking the favorite button on an animal's card will save it to your profile page, which is located in the top navbar when you are logged in.

## Architecture
HTML, CSS and JavaScript, As well as the following libraries: React, React-Bootstrap, Axios and Mongoose, and jwks-rsa.

This web application's front end was created in ReactJS, created with the assistance of Github, Trello, and Figma.
The front end uses Axios to communicate with a back-end server that then collates the user's animal preferences into a get request to the Petfinder API, before handing the results data back to the front end to be rendered in the form of card elements.

Node.js is used for back end development.

The profile system uses OAuth via google account for validation, and when a favorite is saved, mongoose and MongoDB are utilized for the storage of the favorited pet card.

## Change Log

For a detailed changelog, please view the git pull request history to the devBranch for the front end or back end on Github.

## Credit and Collaborations

[Petfinder API by Purina](https://www.petfinder.com/developers/)

Codefellows for instruction and guidance, without which this project would not be possible
