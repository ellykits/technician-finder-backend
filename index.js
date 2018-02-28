// Module imports
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const ServiceProviderRouter = require('./api_routes/service-provider.api')
const UserRouter = require('./api_routes/users.api')
const BookingsRouter = require('./api_routes/bookings.api')
const cors = require('cors')


// Initialize app
const app = express()

//installing middlewares
/* Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});*/
app.use(cors())
app.use(bodyParser.json())
app.use('/api', ServiceProviderRouter)
app.use('/api', UserRouter)
app.use('/api', BookingsRouter)
// Error handling middleware
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message })
  console.log("Error description: "+ err)
})


// Connecting to database
const db_url = 'mongodb://127.0.0.1:27017/techy-data'
mongoose.Promise = global.Promise
mongoose.connect(db_url)

// Listen to port
let used_port = process.env.port
app.listen(used_port || 3000, function () {
  console.log('[+] app listening to requests on '+ used_port)
})
