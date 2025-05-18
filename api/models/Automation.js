const mongoose = require("mongoose");

const Trigger = mongoose.Schema({
  type: {
    type: String,
    enum: ["COMMENT", "DM"],
  },
  automationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Automation",
  },
});

const Listener = mongoose.Schema({
  type: {
    type: String,
    enum: ["SMARTAI", "MESSAGE"],
  },
  automationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Automation",
  },
  prompt: {
    type: String,
  },
  commentReply: {
    type: String,
  },
  dmCount: {
    type: Number,
    default: 0,
  },
  commentCount: {
    type: Number,
    default: 0,
  },
});

const Post = mongoose.Schema({
  postId: {
    type: String,
  },
  caption: {
    type: String,
  },
  media: {
    type: String,
  },
  mediaType: {
    type: String,
    enum: ["IMAGE", "VIDEO", "CAROUSEL_ALBUM"],
  },
  automationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Automation",
  },
});

const Dms = mongoose.Schema({
  senderId: {
    type: String,
  },
  receiver: {
    type: String,
  },
  message: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  automationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Automation",
  },
});

// const keyword = mongoose.Schema({
// word: {
//   type: String,
// },
//   automationId: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "Automation",
//   },
// });

const automation = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  name: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  active: {
    type: Boolean,
    default: true,
  },
  trigger: [Trigger],
  listener: [Listener],
  posts: [Post],
  dms: [Dms],
  // keywords: [keyword],
  keywords: [
    {
      word: String,
    },
  ],
});

module.exports = mongoose.model("Automation", automation);
