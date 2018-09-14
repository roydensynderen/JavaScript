const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inquirySchema = new Schema({
    fullName: String,
    phoneNumber: Number,
    address: String,
    email: String,
    preferredTime: String,
    message: String
})

const inquiryModel = mongoose.model('Inquiry', inquirySchema)

module.exports = inquiryModel