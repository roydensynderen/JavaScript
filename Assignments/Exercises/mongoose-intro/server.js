const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const PORT = 7575;
const MONGODB_URI = "mongodb://localhost:27017/bounty-project";

const app = express();
app.use(bodyParser.json());
app.use('/bounties', require('./routes/bounties'));

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`))