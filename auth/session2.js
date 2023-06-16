const express = require('express')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
const session = require('express-session')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended :true}))

// mongoose.connect('mongodb://127.0.0.1/sessionData')
// .then(()=>{
//   console.log('DB connected');
// }).catch((err)=>{
//   console.log(err);
// })

const mongoURI = 'mongodb://127.0.0.1/session_db'; // MongoDB URI
const sessionStore = MongoStore.create({ mongoUrl: mongoURI });

app.use(session({
  secret : 'this is a secret',
  resave: false,
  saveUninitialized: true,
  store : sessionStore,
  cookie :{
    maxAge: 1000*60*60*24
  }
}))


app.get('/', (req, res) => {
  // Access session data
  if (req.session.views) {
    req.session.views++;
  } else {
    req.session.views = 1;
  }
  res.send(`You have visited this page ${req.session.views} times.`);
});

app.listen(7777 ,()=>{
  console.log('server is running');
})
