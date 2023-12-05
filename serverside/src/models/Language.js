const mongoose = require("mongoose");

const LanguageScheme = new mongoose.Schema({
  name: { type: String, required: true },
  subscription: [
    { type: mongoose.Schema.Types.ObjectId, ref: "subscriptions" },
  ],
  levels: [{ type: mongoose.Schema.Types.ObjectId, ref: "levels" }],
});

const LanguageModel = mongoose.model("languages", LanguageScheme);

module.exports = LanguageModel;
