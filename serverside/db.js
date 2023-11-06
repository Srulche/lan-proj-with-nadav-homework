//This file created for the db connection
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./src/models/User");
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI).then(async () => {
  console.log("Connected to MongoDB");
});
