const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'A user name is required']
	},
	firstname: {
		type: String,
		required: [true, 'A user firstname is required']
	}
});

module.exports = mongoose.model('Users', UserSchema);