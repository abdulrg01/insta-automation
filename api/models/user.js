const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const user = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  subscription: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subscription",
  },
  automation: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Automation",
    },
  ],
  integrations: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Integration",
    },
  ],
});

user.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
});

user.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", user);
