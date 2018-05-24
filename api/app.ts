const express = require('express');
const app = express();
const path = require('path');
const port =  process.env.PORT || 8080;

// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/public'));

app.get('/api', function (req, res) {
    res.send('Hello World!');
});

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
