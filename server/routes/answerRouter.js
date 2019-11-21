const express = require('express')
const Router= express.Router()
const answerController = require('../controllers/answerController')
const auth = require('../middlewares/auth')
// const autho = require('../middlewares/autho')
const autho = require('../middlewares/authoAnswer')

Router.get('/', auth,answerController.readAll)
Router.post('/', auth,answerController.create)
Router.delete('/', auth,autho,answerController.delete)


module.exports = Router