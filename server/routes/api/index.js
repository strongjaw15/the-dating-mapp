const router = require('express').Router();
const userRoutes = require('./user-routes');
const feedbackRoutes = require('./feedback-routes');
const interestRoutes = require('./interest-routes');

router.use('/user', userRoutes);
router.use('/feedback', feedbackRoutes);
router.use('/interest', interestRoutes);

module.exports = router;
