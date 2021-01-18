const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
	id: Number,
	text: String,
	startLocation: String,
	endLocation: String,
	createdAt: {
		type: Date,
		default: Date.now()
	}
})

module.exports = mongoose.model('Project', projectSchema)