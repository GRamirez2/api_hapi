const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema({
  first: String,
  last: String,
  phone: String,
  email: String,
  email2: String,
  vehicle: String,
  address: String,
  city: String,
  state: String,
  zip: Number,
  jobs: Number,
  reviews: [String]
})

module.exports = mongoose.model('Driver', driverSchema);