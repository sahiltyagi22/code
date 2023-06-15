const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')

const MongoStore = require('connect-mongo')(new session)


const app = express()

const dbString = 'mongodb://127.0.0.1/sessionDB';
const dbOptions = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}

const connection = mongoose.createConnection(dbString , dbOptions)

app.use(express.json())
app.use(express.urlencoded({extended : true}))

mongoose.connect('mongodb://localhost/session-example', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Set up the session middleware
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    })
  })
);

    app.get('/', (req,res)=>{
        res.send("hello express ssessions ")
    })

    app.listen(4000)