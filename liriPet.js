
// add code to read and set any environment variables with the dotenv package
require("dotenv").config();
// console.log(process.env);

// dependencies
let petfinder = require("@petfinder/petfinder-js");

// Add the code required to import the `keys.js` file and store it in a variable
const keys = require("./keys.js");
let client = new petfinder.Client(keys.petfinder);


client.animal.search()
    .then(function (response) {
        // Do something with `response.data.animals`
        console.log(response.data)
    })
    .catch(function (error) {
        // Handle the error
        console.log(error);
    });

client.animal.search({ type: "Dog" })
    .then(function (response) {
        // Do something with resp.data.animals
        console.log(response.data)
    })
    .catch(function (error) {
        // Handle the error
        console.log(error);
    });

client.animal.search({ size: "Medium" })
    .then(function (response) {
        // Do something with resp.data.animals
        console.log(response.data)
    })
    .catch(function (error) {
        // Handle the error
        console.log(error);
    });

client.animal.search({ age: "Baby" })
    .then(function (response) {
        // Do something with resp.data.animals
        console.log(response.data)
    })
    .catch(function (error) {
        // Handle the error
        console.log(error);
    });

client.animal.search({ gender: "Male" })
    .then(function (response) {
        // Do something with resp.data.animals
        console.log(response.data)
    })
    .catch(function (error) {
        // Handle the error
        console.log(error);
    });

client.animal.search({ coat: "Any" })
    .then(function (response) {
        // Do something with resp.data.animals
        console.log(response.data)
    })
    .catch(function (error) {
        // Handle the error
        console.log(error);
    });

// var runAll = function (userSelection, animal) {
//     userSelect(userSelection, animal);
// }
// runAll(process.argv[2], process.argv.slice(3).join(""));