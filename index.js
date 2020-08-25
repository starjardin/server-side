console.log(`Greeting form Node and index.js! 🎺🎺`);
const express = require('express');
//Let's test that Express is working as expected.
//console.log(express);

//Let's add a new app
const app = express();

//We want express to run on this port

const port = 3000;

//we want listen method to run express, we'll need to pass it our `port`.

app.get('/', (request, response) => {
  console.log('Request: /');
  response.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
    console.log(`app is running here: http://localhost:${port}`);
});