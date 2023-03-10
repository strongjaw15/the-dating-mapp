const router = require('express').Router();
const userRoutes = require('./user-routes');
const feedbackRoutes = require('./feedback-routes');

router.use('/user', userRoutes);

router.use('/feedback', feedbackRoutes);

module.exports = router;
