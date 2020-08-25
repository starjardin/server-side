console.log(`Greeting form Node and index.js! 🎺🎺`);

const nunjucks = require('nunjucks');
const express = require('express');
//Let's test that Express is working as expected.
//console.log(express);

//Let's add a new app
const app = express();
nunjucks.configure({
  autoescape: true,
  express: app
});

//We want express to run on this port

const port = 3000;

//we want listen method to run express, we'll need to pass it our `port`.

app.get('/', (request, response) => {
  response.render('./views/index.html.njk');
});

app.listen(port, () => {
    console.log(`app is running here: http://localhost:${port}`);
});