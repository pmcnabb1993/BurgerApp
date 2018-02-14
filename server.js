// Dependencies
const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
var exphbs = require("express-handlebars");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;



// data parse

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static(__dirname + '/public'));

//Handlebars
app.engine("handlebars", handlebarsEx({defaultLayout: "main"}));
app.set("view engine", "handlebars")

// Routes
require("./controllers/burgers_controller.js")(app);


app.use(routes);

// Starts the server to begin listening

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
