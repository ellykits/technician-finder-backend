const express = require('express')
const ServiceProviderRouter = express.Router()
const SvcPrvData = require('../models/svcprv')

/**
 * This section of codes responds to the requests made to the service providers API
 * All the GET, PUT, DELETE and POST requests for the service providers API is done here *
 */
/* Get services providers information from a the database based on the nearest location using geoNear
ServiceProviderRouter.get('/service_provider/', function (req, res, next) {
  SvcPrvData.geoNear(
    {
      type: 'Point',
      coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
    },
    { spherical: true, maxDistance: 2000 }
  ).then(function (service_provider) {
    console.log('[+] GET request for the nearest service-providers!')
    res.send(service_provider)
  }).catch(next)
})*/

// fetch all service providers
ServiceProviderRouter.get('/service-providers/all/', function (req, res, next) {
  SvcPrvData.find({}).then(all_records => {
    res.send(all_records)
    console.log('[+] Fetched all service providers from the database')
  })
})

// fetch a service provider by id
ServiceProviderRouter.get('/service-providers/:id', function (req, res, next) {
  SvcPrvData.findById({_id:req.params.id}).then(the_record => {
    res.send(the_record)
    console.log('[+] Fetched a service provider from the database by id')
  }).catch(next)
})
// fetch a service provider
ServiceProviderRouter.get('/service-providers/', function (req, res, next) {
  SvcPrvData.findOne({company_id:req.query.id, password:req.query.pass})
  .then(the_record => {
    res.send(the_record)
    console.log('[+] Fetched a service provider from the database by company id and password')
  })
  .catch(next)
})

// Add new service provider to tech-data database
ServiceProviderRouter.post('/service-providers/create/', function (req, res, next) {
  SvcPrvData.create(req.body)
    .then(record => {
      console.log('[+] Just added a new record to service-providers db!')
      res.send(record)
    })
    .catch(next)
})
// update data about service provider
ServiceProviderRouter.put('/service-providers/update/:id', function (req, res, next) {
  SvcPrvData.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      SvcPrvData.findOne({ _id: req.params.id })
        .then(record => {
          console.log(
            '[+] Some record has just been updated in service-providers db!'
          )
          res.send(record)
        })
        .catch(next)
    })
    .catch(next)
})
// delete a service provider
ServiceProviderRouter.delete('/service-providers/:id', function (req, res, next) {
  SvcPrvData.findByIdAndRemove({ _id: req.params.id })
    .then(deleted => {
      console.log(
        '[+] A record has just been deleted from service-providers db!'
      )
      res.send(deleted)
    })
    .catch(next)
})

// Export modules
module.exports = ServiceProviderRouter


