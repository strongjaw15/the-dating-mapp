const router = require("express").Router();
const {
  getSingleLocation,
  getSoulMate,
  updateSoulMate,
  getLocations,
} = require("../../controllers/connected-controller");

router.route("/location").get(getLocations);
router.route("/:id").get(getSoulMate);
router.route("/location/:locationID").get(getSingleLocation);
router.route("/:locationID/:id").post(updateSoulMate);

module.exports = router;
