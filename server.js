// Requiring necessary npm packages
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
//
// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");
//
// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
//
// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
//
// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});

// ********* for Stat Check page ********* commented out for now //

var API = require("./app/data/api.js");
// document.getElementById("welcome").innerText("Welcome" + fortnitePlayer.player + "here are your stats" + fortnitePlayer.getUser())
// this will eventually be in apiRoutes ... or some other js page
let fortnitePlayer = new API("weatherfields", "pc");
fortnitePlayer.getUser();
console.log("the player is", fortnitePlayer.player);