const mongoose = require('mongoose');
const moment = require('moment');

const CarSchema = new mongoose.Schema({
  name: { type: String, required: true, lowercase: true, unique: true },
  type: { type: String, required: true },
  date: {
    type: String,
    default: () => moment().format('dddd, MMMM, Do YYYY, h:mm a')
  }
});

module.exports = mongoose.model('car', CarSchema);