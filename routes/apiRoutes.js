// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// add code to read and set any environment variables with the dotenv package
require("dotenv").config();
// console.log(process.env);

let petfinder = require("@petfinder/petfinder-js");
// let client = new petfinder.Client({apiKey: "EGc3gxBpk6teIzgELn3yobiuQzodUCyieJnvK8zEj633m76rEz", secret: "TJgV9Um001Akix3x70lcFD1eO3gIQX7aAIBlIMUB"});

// Add the code required to import the `keys.js` file and store it in a variable
const keys = require("../keys.js");
let client = new petfinder.Client(keys.petfinder);

// dependency

// Requiring our pet model
let db = require("../models");


// Routes
// =============================================================
module.exports = function (app) {

    app.post("/api/pets", function (req, res) {
        client.animal.search(
            {
                type: req.body.type,
                size: req.body.size,
                gender: req.body.gender,
                coat: req.body.coat,
                age: req.body.age,
            }
        )
            .then(function (response) {
                // Post to your database here
                // res.json(response.data.animals[0].type);
                // res.json(response.data.animals[0].size);                    it doesn't appear that these are needed but leaving for the time being
                // res.json(response.data.animals[0].gender);
                // res.json(response.data.animals[0].coat);
                // res.json(response.data.animals[0].age);
                // res.json(response.data.animals[0].description);
                // res.json(response.data.animals[0].photos);

                db.Pet.create({
                    type: response.data.animals[0].type,
                    size: response.data.animals[0].size,
                    gender: response.data.animals[0].gender,
                    coat: response.data.animals[0].coat,
                    age: response.data.animals[0].age,
                    description: response.data.animals[0].description,
                    photos: response.data.animals[0].photos[0].medium,  //if this doesn't work drill to see if you can get one pic by adding:     [0].medium,

                }).then(function (newPet) {
                    // We have access to the new pet as an argument inside of the callback function
                    res.json(newPet);
                });
            })
            .catch(function (error) {
                // Handle the error
                console.log(error);
            });
    });
};


// Udate pet model
// Add to db.create query with each new property
