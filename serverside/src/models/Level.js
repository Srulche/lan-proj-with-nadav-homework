const mongoose = require("mongoose");

const LevelScheme = new mongoose.Schema({
  title: { type: String, required: true },
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: "lessons" }],
});
const LevelModel = mongoose.model("levels", LevelScheme);

module.exports = LevelModel;
