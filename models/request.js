// import modules
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create and register model
// Create ObjectID for references
// let ObjectId = Schema.ObjectId
const RequestSchema = Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    required: [true, 'the UserID cannot be left blank'],
    ref: 'users'
  },
  svcprv_id: {
    type: Schema.Types.ObjectId,
    required: [true, 'the Service Provider cannot be left blank'],
    ref: 'service_providers'
  },
  deadline: {
    type: String
  },
  status: {
    type: String,
    default: 'PENDING'
  },
  task: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },

  date_completed: {
    type: String
  },
  comments: {
    type: String,
    default: ''
  },
  rating: {
    type: Number,
    default: 0
  },
  item: {
    type: String,
    default: ''
  }
})

const RequestModel = mongoose.model('booking', RequestSchema)
module.exports = RequestModel
