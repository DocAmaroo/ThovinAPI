const Users = require('../models/Users');

exports.getAllUser = function (req, res) {
	Users.find({}, function (err, users) {
		if (err) {
			console.error(err);
			return res.status(500).send(err);
		}

		if (!users) {
			return res.status(404).json({
				ok: false,
				code: 'US40401',
				message: 'No user found'
			})
		}

		return res.status(200).json({
			ok: true,
			users
		})
	})
}