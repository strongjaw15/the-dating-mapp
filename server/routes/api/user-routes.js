const router = require('express').Router();

// Import any controllers needed here
const { authUser, createUser, updateUser, verifyUser, getAllUsers, getSingleUser } = require('../../controllers/user-controller');

// Declare the routes that point to the controllers above

router.route('/').get(getAllUsers).post(createUser);
router.route('/auth').post(authUser);
router.route('/verify').post(verifyUser);
router.route('/:id').get(getSingleUser).put(updateUser);

module.exports = router;
