const mongoose = require("mongoose");

const IntegrationSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  name: {
    type: String,
    enum: ["Instagram"],
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  plan: {
    type: String,
    enum: ["free", "pro"],
    default: "free",
  },
  token: {
    type: String,
    require: true,
  },
  expiresAt: {
    type: Date,
    require: true,
  },
  instagramId: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("integration", IntegrationSchema);
