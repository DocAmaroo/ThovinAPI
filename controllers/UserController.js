const Users = require('../models/Users');

exports.getAllUser = function (req, res) {
	Users.find({}, function (err, users) {
		if (err) {
			console.error(err);
			return res.status(500).send(err);
		}

		if (!users) {
			return res.status(404).send();
		}

		return res.status(200).json(users);
	})
}