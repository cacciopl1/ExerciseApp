const { response } = require('express');
const express = require('express');
const path = require('path');
require('dotenv').config();

//controllers
const users = require('./controllers/users');

const app = express()
const port = process.env.PORT || 3000;

console.log(process.env.BEST_CLASS);

app.use(express.json());
app.use(express.static( __dirname + '/../docs/'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(function(req, res, next) {
  const arr = (req.headers.authorization || "").split(" ");
  if (arr.length > 1 && arr[1] != null) {
    req.userId = +arr[1];
  }
  next();
});

app.get('/', (req, res, next) => {
  res.send('Hello Me' + req.url)
})

// use controllers
app.use('/users', users);

app.get('*', (req, res, next) => {
  const filename = path.join( __dirname, '/../docs/index.html');
  res.sendFile( filename );
});

app.use( (err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send( { message: err.message } )
} )

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})