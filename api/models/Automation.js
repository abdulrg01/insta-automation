const mongoose = require("mongoose");

const Trigger = mongoose.Schema({
  type: {
    type: String,
    enum: ["smartAI", "message"],
    required: true,
  },
  automationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Automation",
    required: true,
  },
});

const Listeners = mongoose.Schema({
  type: {
    type: String,
    enum: ["smartAI", "message"],
    required: true,
  },
  automationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Automation",
    required: true,
  },
  prompt: {
    type: String,
    required: true,
  },
  commentReply: {
    type: String,
    required: true,
  },
  dmCount: {
    type: Number,
    default: 0,
    required: true,
  },
  commentCount: {
    type: Number,
    default: 0,
    required: true,
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
    enum: ["image", "video", "carousel_album"],
  },
  automationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Automation",
    required: true,
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
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  automationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Automation",
    required: true,
  },
});

const keyword = mongoose.Schema({
  word: {
    type: String,
  },
  automationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Automation",
    required: true,
  },
});

const automation = new mongoose.Schema({
  name: {
    type: String,
    required: true,
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
  listeners: [Listeners],
  posts: [Post],
  dms: [Dms],
  keywords: [keyword],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  }, 
});

module.exports = mongoose.model("Automation", automation);
