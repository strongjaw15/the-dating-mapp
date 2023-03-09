const mongoose = require('mongoose');
const { Interest } = require("../models");

const interestData = [
    {
        apple: "Granny Smith",
        season: "Fall",
        bread: "Sourdough",
        house: "Slytherin",
        movie: "Midsommer"
    },
    {
        apple: "Golden Delicious",
        season: "Summer",
        bread: "Wheat",
        house: "Hufflepuff",
        movie: "The Village"
    },
    {
        apple: "Golden Delicious",
        season: "Winter",
        bread: "Rye",
        house: "Ravenclaw",
        movie: "Them That Follow"
    },
    {
        apple: "Gala",
        season: "Spring",
        bread: "Pumpernickle",
        house: "Gryffindor",
        movie: "Hereditary"
    },
];

const seedInterest = () => {
    Interest.insertMany(interestData, (err, docs) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Interests seeded");
        }
    });
};

module.exports = seedInterest;