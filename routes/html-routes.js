// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
//
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
//
module.exports = function (app) {
    //
    app.get("/", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });
    //
    app.get("/login", function (req, res) {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/members");
        }
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "/public/index.html"));
    });

    app.get("/chat", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/chat1.html"))
    })
    app.get("/signup", function (req, res) {
        res.sendFile(path.join(__dirname, "/public/signup.html"))
    })
    app.get("/stat", function (req, res) {
        res.sendFile(path.join(__dirname, "/public/stat-check.html"))
    })
    app.get("/dash", function (req, res) {
        res.sendFile(path.join(__dirname, "/public/dashboard.html"))
    })
    //
    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be 
    //redirected to the signup page
    // app.get("/", isAuthenticated, function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/members.html"));
    // });

    // app.get("/chat_chat_chat", (req, res) => {
    //     res.render("index")
    // })

};