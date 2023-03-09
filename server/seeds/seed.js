const mongoose = require('mongoose');
require('../config/connection');

const seedUser = require('./user-seeds');
const seedFeedback = require('./feedback-seeds');
const seedInterest = require('./interest-seeds');


const seedAll = async () => {
    await seedUser();
    console.log('\n----- Users SEEDED -----\n');

    await seedFeedback();
    console.log('\n----- Feedback SEEDED -----\n');

    await seedInterest();
    console.log('\n----- Interests SEEDED -----\n');

    process.exit(0);
};

seedAll();