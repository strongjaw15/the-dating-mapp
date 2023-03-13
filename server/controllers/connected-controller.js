const { User, Location } = require("../models");

module.exports = {
  getLocations(req, res) {
    Location.find()
      .then((locations) => res.json(locations))
      .catch((err) => res.status(500).json(err));
  },

  getSingleLocation(req, res) {
    Location.findOne({ _id: req.params.locationId })
      .select("-__v")
      // .populate('reactions')
      .then((location) =>
        !location
          ? res.status(404).json({ message: "No location with that ID" })
          : res.json(location)
      )
      .catch((err) => res.status(500).json(err));
  },

  getSoulMate(req, res) {
    User.findOne({ _id: req.params.id })
      // .select('-__v')
      // .populate('interests', 'soulMates', 'feedbacks')
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with that ID" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  updateSoulMate({ body, params }, res) {
    let userToUpdate = {
      soulMates: body.soulMate,
    };

    const user = User.updateOne({ _id: params.id }, userToUpdate, {
      new: true,
    });

    if (!user)
      return res.status(400).json({ message: "Unable to update user" });

    // This creates a new object without the password
    // const {password, ...newUserObj} = user

    res.status(200).json({ _id: user._id, email: user.email });
  },
};
