// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

var petfinder = require("@petfinder/petfinder-js");
// var client = new petfinder.Client (keys.petfinder);
let client = new petfinder.Client({apiKey: "EGc3gxBpk6teIzgELn3yobiuQzodUCyieJnvK8zEj633m76rEz", secret: "TJgV9Um001Akix3x70lcFD1eO3gIQX7aAIBlIMUB"});

// Routes
// =============================================================
module.exports = function(app) {

    app.post("/api/pets", function(req, res) {
        client.animal.search(
            {
              type: req.body.type,
              size: req.body.size,
              gender: req.body.body,
              coat: req.body.coat,
              age: req.body.age
            }
          )
          .then(function (response) {
            // Post to your database here
            res.json(response.data.animals[0].type);
            db.Pet.create({
                type: response.data.animals[0].type,
              }).then(function(newPet) {
                // We have access to the new todo as an argument inside of the callback function
                res.json(newPet);
              });
          })
          .catch(function (error) {
              // Handle the error
              console.log(error);
          });
    }); 
};


// Udate your pet model
// Add to your db.create query with each new property
