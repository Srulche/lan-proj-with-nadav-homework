const mongoose = require("mongoose");

const SubscriptionScheme = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  expireAt: { type: Date, required: true },
});
const SubscriptionModel = mongoose.model("subscriptions", SubscriptionScheme);

module.exports = SubscriptionModel;
