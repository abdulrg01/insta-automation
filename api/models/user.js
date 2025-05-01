const mongoose = require("mongoose");

const user = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
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

module.exports = mongoose.model("User", user);
