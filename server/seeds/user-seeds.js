const mongoose = require('mongoose');
const { User } = require("../models");

const userData = [
    {
        name: "Ziggy Stardust",
        username: "ziggy",
        email: "ziggy@yahoo.com",
        zipCode: 555101,
        password: "password",
    },
    {
        name: "David Bowie",
        username: "davidbowie",
        email: "david@yahoo.com",
        zipCode: 55044,
        password: "password",
    },
    {
        name: "Lily Allen",
        username: "lilyallen",
        email: "lily@yahoo.com",
        zipCode: 55101,
        password: "password",
    },
    {
        name: "Stevie Nicks",
        username: "stevienicks",
        email: "stevie@yahoo.com",
        zipCode: 55101,
        password: "password",
    },

];

const seedUser = () => {
    User.insertMany(userData, (err, docs) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Users seeded");
        }
    });
};

module.exports = seedUser;
