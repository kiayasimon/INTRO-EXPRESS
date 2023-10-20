// Load express
const express = require("express");
const path = require("path");

//requirer ther To Do "Database"
const studentDb = require("./data/students-db");

// Create our express app
const app = express();

//Configure the app (app.set)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Mount middleware (app.use)

//Mount Routes

// Define a "root" route directly on app
// We'll use best practice routing
app.get("/", function (req, res) {
  //Path MUST START WITH A LEADING SLASH
  res.redirect("/students");
});

app.get("/home", function (req, res) {
  //Never begin the name of a template you're accessing/renderign with a forward slash
  res.render("home");
});

app.get("/students", function (req, res) {
  const students = studentDb.getAll();
  res.render("students/index", { students} );
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log("Listening on port 3000");
});
