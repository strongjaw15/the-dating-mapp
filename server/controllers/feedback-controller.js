const Feedback = require('../models/Feedback');

module.exports = {
    getFeedbacks (req, res) {
        Feedback.find()
            .then((feedbacks) => res.json(feedbacks))
            .catch((err) => res.status(500).json(err));
    },

    getSingleFeedback(req, res) {
        Feedback.findOne({ _id: req.params.feedbackId })
            .select('-__v')
            // .populate('reactions')
            .then((feedback) =>
                !feedback
                    ? res.status(404).json({ message: 'No feedback with that ID' })
                    : res.json(feedback)
            )
            .catch((err) => res.status(500).json(err));
    },

    createFeedback(req, res) {
        Feedback.create(req.body)
            .then((feedback) =>
                User.findOneAndUpdate(
                    { users: feedback.username },
                    { $set: {feedbacks: feedback}},
                    { new: true }
                )
            )
            .then((user) =>
            !user
            ? res.status(404).json({
                message: 'Feedback created, but no user found',
                })
            : res.json(user)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
    },
}

