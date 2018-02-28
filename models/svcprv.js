// Import modules
const mongoose = require('mongoose')

// Create schema and model
const Schema = mongoose.Schema

// Geometry Schema that will be used to locate the service provider in the google map
// This schema will be nested into the Service Providers Schema aka svcprvD
const GeometrySchema = new Schema({
  type: {
    type: String,
    default: 'Point'
  },
  coordinates: {
    type: [Number],
    index: '2dsphere'
  }
})

const SvcPrvDataSchema = new Schema({
  company_id: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  company_name: {
    type: String,
    required: [true, 'Company  name is required']
  },
  logo: {
    type: String,
    default: ''
  },
  category: {
    type: String,
    required: [true, 'Category must be specified']
  },
  speciality: {
    type: String,
    required: [true, 'Please specify your speciality']
  },
  service_location: {
    type: String,
    default: ''
  },
  geometry: GeometrySchema,
  warranty: {
    type: Boolean,
    default: ''
  },
  p_address: {
    type: String,
    default: ''
  },
  brands: {
    type: String,
    default: ''
  },
  country: {
    type: String,
    default: ''
  },
  county: {
    type: String,
    default: ''
  },
  region: {
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
  website: {
    type: String,
    default: ''
  },
  working_days: {
    type: String,
    default: ''
  },
  working_hrs: {
    type: String,
    default: ''
  },
  products: {
    type: String,
    default: ''
  },
  services: {
    type: String,
    default: ''
  },
  subscribers: {
    type: [String]
  },
  ratings_count: {
    type: Number,
    default: 0
  }
})
const SvcPrvData = mongoose.model(
  'service_provider',
  SvcPrvDataSchema
)
module.exports = SvcPrvData
