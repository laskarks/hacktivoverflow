if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV === 'development') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = process.env.PORT
const indexRouter = require('./routes/index')
const errHandler = require('./middlewares/errHandler')
const morgan = require('morgan')


//mongoose-connection
mongoose.connect('mongodb://localhost/hacktiv-overflow', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We are connected to mongoDb')
});

//app-use
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(indexRouter)
app.use(errHandler)
app.use(morgan('dev'))


app.listen(PORT, () => console.log('Server listening on ' + PORT))

