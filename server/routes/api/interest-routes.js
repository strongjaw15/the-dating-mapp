const router = require('express').Router();

// Import any controllers needed here
const { getAllInterests, getSingleInterest, createInterest, updateInterest } = require('../../controllers/interest-controller');

// Declare the routes that point to the controllers above

router.route('/').get(getAllInterests);
router.route('/:interestId').get(getSingleInterest).put(updateInterest);
router.route('/:interestId/user/:userID').post(createInterest);

module.exports = router;
