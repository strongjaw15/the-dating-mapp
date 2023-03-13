const router = require("express").Router();
const userRoutes = require("./user-routes");
const feedbackRoutes = require("./feedback-routes");
const interestRoutes = require("./interest-routes");
const connectedRoutes = require("./connected-routes");

router.use("/user", userRoutes);
router.use("/feedback", feedbackRoutes);
router.use("/interest", interestRoutes);
router.use("/get-connected", connectedRoutes);

module.exports = router;
