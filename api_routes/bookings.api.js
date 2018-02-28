const express = require('express')
const BookingsRouter = express.Router()
const RequestModel = require('../models/request')
/**
 * This section of codes responds to the requests made to the Bookings API
 * All the GET, PUT, DELETE and POST requests for the users API is done here *
 */

// fetch all booking records
BookingsRouter.get('/bookings/all', function (req, res, next) {
  RequestModel.find({}).then(all_requests => {
    res.send(all_requests)
    console.log(
      '[+] Fetched all booking requests  from the bookings collection'
    )
  })
})
//fetch boookings for particular technicians
BookingsRouter.get('/bookings/', function (req, res, next) {
  RequestModel.find({svcprv_id:req.query.techy}).then(all_requests => {
    res.send(all_requests)
    console.log(
      '[+] Fetched all booking requests  from the bookings collection for particular techhnician'
    )
  })
})
//fetch boookings for particular user
BookingsRouter.get('/bookings/:id', function (req, res, next) {
  RequestModel.find({user_id:req.params.id}).then(all_requests => {
    res.send(all_requests)
    console.log(
      '[+] Fetched all booking requests  from the bookings collection for particular user'
    )
  })
})
// Return individual booking
BookingsRouter.get('/bookings/req/:id', function (req, res, next) {
  RequestModel.findOne({ _id: req.params.id }).then(booking => {
    res.send(booking)
    console.log('[+] One booking request fetched from the bookings collection')
  })
})

// add new booking record
BookingsRouter.post('/bookings/new', function (req, res, next) {
  RequestModel.create(req.body)
    .then(added_booking => {
      res.send(added_booking)
      console.log(
        '[+] Just added a new booking request to the bookings collection'
      )
    })
    .catch(next)
})
// Update booking record
BookingsRouter.put('/bookings/edit/:id', function (req, res, next) {
  RequestModel.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      RequestModel.findOne({ _id: req.params.id })
        .then(found => {
          res.send(found)
          console.log(
            '[+] Some booking record has been updated in the database collection'
          )
        })
        .catch(next)
    })
    .catch(next)
})

// Remove a single booking record from the database
BookingsRouter.delete('/bookings/del/:id', function (req, res, next) {
  RequestModel.findByIdAndRemove({
    _id: req.params.id
  }).then(deleted => {
    res.send(deleted)
    console.log(
      '[+] A record has been deleted fro the bookings collection in the database'
    )
  })
})
// Export modules
module.exports = BookingsRouter
