# Server-side

A series of exercises for getting a JavaScript-based server-side application up and running

# Running a server

1.`npm init -y`
1. Edit package.json and add new scripts, for instance : `"scripts":{
  "server": `node.js ./index.js`
}`; make sure you have the index.js file in your directory.
cool!!!!

# Setting up express

1. `npm i express`
1. you can include some signal in your js file if you want but I think it is really useful.
1. run your `serve` script.
1. we need to create our express
`````
const express = require('express');
`````
1. Let's create a new app

``````
const app = express();
``````
1. Create a port
````
const port = 3000;
````
1. set app routing rules
```
app.get('/', (request, response) => {
  console.log('Request: /');
  response.send('Hello World, from the Express homepage!');
});
```
1. add listener
```
app.listen(port, () => {
    console.log(`app is running here: http://localhost:${port}`);
});
```
1. finaly you can serve your file by changing the `resonse.send()` with this 
```
response.sendFile(__dirname + '/index.html');
```