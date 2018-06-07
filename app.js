// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// Our first Route
app.get('/', (request, response, next) => {
  console.log(request);
  response.send('<h1>Welcome Ironhacker. :)</h1>');
});

app.get('/cat', (request, response, next) => {
  response.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Cat</title>
        <link rel="stylesheet" href="/stylesheets/style.css" />
      </head>
      <body>
        <h1>Cat</h1>
        <p>This is my second route</p>
        <img src="/images/cool-cat.jpg" />
      </body>
    </html>
  `);
});

// app: Our express server
// get: the HTTP Verb needed to access this page
// /: the route that the User will type into the URL bar
// request: An object containing information about the request, such as the headers. More on this later.
// response: An object containing information about the response, such as headers and any data we need to send to the client.
// next: We will use this later to handle errors. Leave it there for now.

// Server Started
app.listen(3000, () => {
  console.log('My first app listening on port 3000!')
});