const mongoose = require("mongoose");

const LessonScheme = new mongoose.Schema({
  title: { type: String, required: true },
  audio: { type: String, required: false, default: null },
  notes: { type: String, required: false, default: null },
  vocabulary: [{ word: String, translation: String }],
});
const LessonModel = mongoose.model("lessons", LessonScheme);

module.exports = LessonModel;
