var express = require('express');
var app     = express();
var path    = require('path');

app.use(express.static(__dirname + '/app'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('/app/index.html', { root: __dirname });
});

app.listen(process.env.PORT || 5000);
console.log('Magic on 5000');
