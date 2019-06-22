const mongoose = require('mongoose')
const { Schema } = mongoose;

const bountySchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    price: Number,
    living: Boolean,
    bountyAmount: Number,
    type: {
        type: String,
        required: true,
        enum: ['Jedi', 'Sith']
    }
})

//MODEL NAME SHOULD BE CAPITALIZED AND SINGULAR
const bountyModel = mongoose.model('Bounty', bountySchema);

module.exports = bountyModel;