require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const MongoStore = require('connect-mongo')(session);

require("./config/passport"); 

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(x => {
  console.log(
    `Connected to Mongo! Database name: "${x.connections[0].name}"`
  );
})
.catch(err => {
  console.error("Error connecting to mongo", err);
});
mongoose.set('useCreateIndex', true);

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    credentials: true,
    origin: function(origin, callback) {
      return callback(null, true)
    }
    
  })
  // cors()
);

//app.use(cors())

app.use(
  session({
    secret: process.env.SECRET,
    resave: false, 
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
    saveUninitialized: true,
    cookie: {maxAge: 1000 * 60 *60}
  })
);

app.use(passport.initialize());
app.use(passport.session());

// what is this?
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use('/api', require('./routes/event-routes'));
app.use('/api', require('./routes/auth-routes'));
app.use('/api', require('./routes/venue-routes'));


module.exports = app;
