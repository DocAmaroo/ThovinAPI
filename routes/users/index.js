const router = require('express').Router();
const UserController = require('../../controllers/UserController');

router.route('')
	.get(UserController.getAllUser);

module.exports = router;