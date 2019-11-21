const userController = require('../controllers/userController')
const express = require('express')
const Router = express.Router()

Router.get('/', userController.readAll)
Router.post('/',userController.create)
Router.post('/login', userController.login)


module.exports = Router