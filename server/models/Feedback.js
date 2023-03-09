const mongoose = require('mongoose');
const { Schema, model } = require('mongoose');

const feedbackSchema = new Schema(
    {
        locationReview: {
            type: String,
            required: true,
        },
        soulMateReview: {
            type: String,
            required: true,
        },
        user: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
        soulMate: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ],
    },
);

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;