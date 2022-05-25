
const express = require('express')
const { dashboard } = require('../controllers/dashboard')
const dashboardRoutes = express.Router()

dashboardRoutes.get('/dashboard/:id',dashboard)

module.exports = dashboardRoutes
