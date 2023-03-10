const router = require('express').Router();
const {
    getFeedbacks,
    getSingleFeedback,
    createFeedback,
} = require('../../controllers/feedback-controller');

router.route('/').get(getFeedbacks).post(createFeedback);

router.route('/:feedbackId').get(getSingleFeedback);

module.exports = router;