'use strict'
const routes = require('express').Router()
// NOT USING THIS FILE
routes.get('/hello', (req, res) => res.send({hello: 'world'}))

module.exports = routes