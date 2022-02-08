const express = require('express'); //the require function is a part of the nodes
//standard library, it imports the module given as an argument and returns it
const app = express(); //we create an instance of the server application

app.get('/temperature', function(req, res))
{
  res.send('24 ℃');
};


app.get ('/humidity', function(req, res))
{
  res.send('48%');
};

/*
explanation of the method above, app get is a method of the app server object
when called defines an http get endpoint

app get takes two arguments, the first one is path, the second one is a callback
the path we defined is /temperature, which means that an http client will have to make
a get request to /temperature in order to access this endpoint.

The callback function that is called every time the endpoint is hit. this function
provides the req and res objects as arguments which represent the request and
response, respectively.

the req object gives properties and methods of request while res gives methods
that allow a response to be sent back to the client

the res.send method sends a simple text response to the client when called.
*/

//starting the server on the PI

app.listen(3000, function()
{
  console.log('Server listening on port 3000');
});
