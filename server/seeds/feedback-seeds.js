const mongoose = require('mongoose');
const { Feedback } = require("../models");

const feedbackData = [
    {
        locationReview: "This place is great!",
        soulMateReview: "I had a great time with this person!",
    },
    {
        locationReview: "Too cold!",
        soulMateReview: "They were lovely!",
    },
    {
        locationReview: "I would definitely come back!",
        soulMateReview: "He smells like ciabatta bread!",
    },
    {
        locationReview: "There were holes in the ceiling!",
        soulMateReview: "She had 12 toes, but was really nice!",
    },
];

const seedFeedback = () => {
    Feedback.insertMany(feedbackData, (err, docs) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Users seeded");
        }
    });
};

module.exports = seedFeedback;