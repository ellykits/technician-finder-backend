// Import modules
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create schema and register to the model
// Requests Schema to handle bookings made to the service providers

const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  gender: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  password: {
    type: String
  },
  p_address: {
    type: String,
    default: ''
  },
  street: {
    type: String,
    default: ''
  },
  estate: {
    type: String,
    default: ''
  },
  national_id: {
    type: String,
    default:''
  },
  favorites: {
    type: [String]
  }
})

// Export Model
const UserModel = mongoose.model('user', UserSchema)
module.exports = UserModel
