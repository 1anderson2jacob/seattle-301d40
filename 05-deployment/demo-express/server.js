'use strict';

//Load Express
const express = require('express');

//Instantiate Express os it's usable
const app = express();

// Designate a port on which to serve our app
const PORT = 3000;

// Define which directory that we will server files from
app.use(express.static('./public'));

// Create a route for our bat-country file
app.get('/bats', (req, res) => {
  console.log('The bats route has been hit');
  res.status(200).sendFile('public/bat-country.html', {root: '.'});
});

// Tell the app to listen
app.listen(PORT, () => console.log(`Our app is listening on port ${PORT}`));



