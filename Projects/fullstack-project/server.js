const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const nodemailer = require('nodemailer');
require("dotenv").config();

const PORT = 7878;
const MONGODB_URI = "mongodb://localhost:27017/inquiries";

const app = express();

//View Engine setup
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/inquiries', require('./routes/inquiries.js'))

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err))

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`))