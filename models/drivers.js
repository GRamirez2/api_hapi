const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const driverSchema = new Schema({
  name: String,
  phone: String,
  email: String,
  email2: String,
  vehicle: String,
  address: String,
  city: String,
  state: String,
  zip: Number
})

module.exports = mongoose.model('Driver', driverSchema);