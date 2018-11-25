<<<<<<< HEAD
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



=======
'use strict';

// Load Express
const express = require('express');

// Instantiate Express so that we can use it
const app = express();

// Designate a port to serve our app on
const PORT = 3000;

// Define which directory that we will serve files from
app.use(express.static('./public'));

// Create a route for our bat-country file
app.get('/bats', (req, res) => {
  console.log('The bats route has been hit!!! Watch out! BATS!!!');
  res.status(200).sendFile('public/bat-country.html', {root: '.'});
});

// Tell the app to listen so that it can do its thing
app.listen(PORT, () => console.log(`Our app is listening on port ${PORT}`));
>>>>>>> 9aafe8c0bd30df74a79a0dbffc3b4ed627f12792
