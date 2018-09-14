const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bountySchema = new Schema({
    fullName: String,
    living: Boolean,
    bountyAmount: Number,
    type: String
})

const bountyModel = mongoose.model('Bounty', bountySchema);

module.exports = bountyModel;