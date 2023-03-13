const router = require('express').Router();
const {
    getFeedbacks,
    getSingleFeedback,
    createFeedback,
    deleteFeedback
} = require('../../controllers/feedback-controller');

router.route('/').get(getFeedbacks).post(createFeedback);

router.route('/:feedbackId').get(getSingleFeedback).delete(deleteFeedback);

module.exports = router;