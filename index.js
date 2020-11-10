'use strict';

// Imports dependencies and set up http server
const
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express().use(bodyParser.json());


// Adds support for GET requests to our webhook
app.get('/image', (req, res) => {
    console.log("Call 1 ...");
    console.log("Resquest header");
    console.log(req['headers']);

    res.header("Accept-CH", "UA-Full-Version, UA-Platform, UA-Platform-Version, UA-Arch, UA-Model");

    console.log("Response header");
    console.log(res.headers);

    res.redirect('/image2');
});

app.get('/image2', (req, res) => {
    console.log("Call 2 ...");
    console.log("Resquest header");
    console.log(req['headers']);

    res.json({ 
        request: req['headers']
      });
});


console.log('View port : ' + process.env.PORT);

app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));