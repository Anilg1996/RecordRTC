
const mongoose = require('mongoose');

const recordingSchema = new mongoose.Schema({
  data: String, 
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Recording', recordingSchema);
