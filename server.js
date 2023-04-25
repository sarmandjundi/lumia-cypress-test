// Import Express, a web server framework
const express = require('express');
// Create a webserver
const app = express();
// Serve the content in the lumiashop folder
app.use(express.static('lumiashop'));
// Start the webserver
app.listen(3000, () => console.log('Listening on http://localhost:3000'));