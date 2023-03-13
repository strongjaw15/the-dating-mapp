const router = require("express").Router();
const {
  getSingleLocation,
  getSoulMate,
  updateSoulMate,
} = require("../../controllers/connected-controller");

router.route("/:locationID/:id").post(updateSoulMate);
router.route("/:locationID").get(getSingleLocation);
router.route("/:id").get(getSoulMate);

module.exports = router;
