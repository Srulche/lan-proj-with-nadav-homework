const mongoose = require("mongoose");
const crypto = require("crypto"); // this is for encryption passwords
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [2, "Name must be at least 2 chars long"],
  },

  email: {
    type: String,
    required: true,
    validate: [validateEmail, "Please fill a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minLength: [6, "Password must be at least 6 chars long"],
  },
  level: {
    type: String,
    required: true,
    enum: ["BEGINNER", "INTERMMEDIATE", "ADVANCED"],
    default: "BEGINNER",
  },
  subscriptions: [
    { type: mongoose.Schema.Types.ObjectId, ref: "subscriptions" },
  ],
  isAdmin: { type: Boolean, default: false },
});

// pre: method for saving and encryption the password
UserSchema.pre("save", async function (next) {
  var user = this;
  if (user.isModified("password")) {
    const hashed = crypto
      .createHash("sha1")
      .update(user.password)
      .digest("hex"); // digest("hex")-for saving it in hexadecimal
    user.password = hashed;
  }
  if (user.isModified("email")) {
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      return next("Email address already exist");
    }
  }
  //This creates the encryption
  next();
});

UserSchema.methods.comparePassword = function (candidatePassword) {
  var user = this;
  const hashed = crypto
    .createHash("sha1")
    .update(candidatePassword)
    .digest("hex");
  if (user.password !== hashed) return false; // Password does not match
  return true; // Password does match
};

const User = mongoose.model("users", UserSchema); // This activates and uses the userSchema object model
module.exports = User;
