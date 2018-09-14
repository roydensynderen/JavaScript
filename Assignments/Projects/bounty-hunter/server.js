const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');  
const path = require("path")
require("dotenv").config()

const PORT = process.env.PORT || 5555;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/bounty-project";

const app = express();

app.use(bodyParser.json());
app.use("/bounties", require("./routes/bounties.js"));

app.use(express.static(path.join(__dirname, "client", "build")))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/bounty-project", { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
