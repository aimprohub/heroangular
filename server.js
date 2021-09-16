//install express server
const express = require('express');
const path = require('path');
const app = express();
// serve only the static file from the dist dir
app.use(express.static('./dist/MILKBANK_UI_CPY'));

app.get('/*',(req, res) =>
   res.sendFile('index.html', {root: 'dist/angular-heroku/'}),
);

//start the app by listening on default heroku port
app.listen(process.env.PORT || 8000);
