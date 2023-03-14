
const db = require('../config/connection');
const { User, Feedback, Interest, Location } = require('../models');

const seedUser = require('./userData');
const seedFeedback = require('./feedbackData');
const seedInterest = require('./interestData');
const seedLocation = require('./locationData');

db,once('open', async () => {

    const users = await User.insertMany(seedUser);
    const feedback = await Feedback.insertMany(seedFeedback);
    const interests = await Interest.insertMany(seedInterest);
    const locations = await Location.insertMany(seedLocation);

    console.log('Users seeded!');
    console.log('Feedback seeded!');
    console.log('Interests seeded!');
    console.log('Locations seeded!');
    process.exit(0);
})

seedAll();