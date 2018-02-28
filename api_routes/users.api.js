const express = require('express')
const UserRouter = express.Router()
const UserModel = require('../models/users')
/**
 * This section of codes responds to the requests made to the users API
 * All the GET, PUT, DELETE and POST requests for the users API is done here *
 */

// fetch all users
UserRouter.get('/users/all', function (req, res, next) {
  UserModel.find({}).then(all_users => {
    res.send(all_users)
    console.log('[+] Fetched all users from the users collection')
  })
})
// fetch a service provider
UserRouter.get('/users/', function (req, res, next) {
  UserModel.findOne({email:req.query.id, password:req.query.pass})
  .then(the_record => {
    res.send(the_record)
    console.log('[+] Fetched a user from the database by email and password')
  })
  .catch(next)
})
// Return individual user
UserRouter.get('/users/:id', function (req, res, next) {
  UserModel.findOne({ _id: req.params.id }).then(returned_user => {
    res.send(returned_user)
    console.log('[+] One user fetched from the users collection')
  })
})

// add new user
UserRouter.post('/users/add', function (req, res, next) {
  UserModel.create(req.body)
    .then(added_user => {
      res.send(added_user)
      console.log('[+] Just added a new user to the users collection')
    })
    .catch(next)
})
// Update user Details
UserRouter.put('/users/edit/:id', function (req, res, next) {
  UserModel.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      UserModel.findOne({ _id: req.params.id })
        .then(found => {
          res.send(found)
          console.log(
            '[+] Some users record has been updated in the database collection'
          )
        })
        .catch(next)
    })
    .catch(next)
})

// Remove a single user from the database
UserRouter.delete('/users/:id', function (req, res, next) {
  UserModel.findByIdAndRemove({
    _id: req.params.id
  }).then(deleted => {
    res.send(deleted)
    console.log(
      '[+] A record has been deleted from the users collection in the database'
    )
  })
})

// Export modules
module.exports = UserRouter
