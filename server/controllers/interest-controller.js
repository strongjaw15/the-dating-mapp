const Interest = require('../models/Interest');
const User = require('../models/User');

module.exports = {
    // Get all interests
    getAllInterests(req, res) {
        Interest.find()
            .then((interests) => res.json(interests))
            .catch((err) => res.status(500).json(err));
    },

    // Get a single interest
    getSingleInterest(req, res) {
        Interest.findOne({ _id: req.params.interestId })
            .select('-__v')
            .then((interest) =>
                !interest
                    ? res.status(404).json({ message: 'No interest with that ID' })
                    : res.json(interest)
            )
            .catch((err) => res.status(500).json(err));
    },

    // Create a new interest
    createInterest(req, res) {
        Interest.create(req.body)
            .then((interest) =>
                User.findOneAndUpdate(
                    { users: interest.username },
                    { $set: {interests: interest}},
                    { new: true }
                )
            )
            .then((user) =>
            !user
            ? res.status(404).json({
                message: 'Interest created, but no user found',
                })
            : res.json(user)
        )
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        }
    )},

    // Update an interest
    updateInterest(req, res) {
        Interest.findByIdAndUpdate(
            { _id: req.params.interestId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((interest) =>
                !interest
                    ? res.status(404).json({ message: 'No interest with that ID' })
                    : res.json(interest)
            )
            .catch((err) => res.status(500).json(err));
    },        
}