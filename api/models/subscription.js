const mongoose = require("mongoose");

const SubscriptionSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

module.exports = mongoose.model("Subscription", SubscriptionSchema);
