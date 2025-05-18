const Automation = require("../models/Automation");

const createAutomationService = (userId) => {
  const automation = Automation.create({ userId });
  if (!automation) {
    throw new Error("automation not created");
  }
  return automation;
};

const getUserAutomationsService = async (userId) => {
  const automations = await Automation.find({ userId })
    .sort({ createdAt: -1 })
    .populate("keywords")
    .populate("listener");

  if (!automations || automations.length === 0) {
    throw new Error("No automations found for this user");
  }

  return automations;
};

const getAutomationInfoService = async (id) => {
  const automation = await Automation.findById(id).exec();

  if (!automation) {
    throw new Error("No automation found");
  }

  return automation;
};

const updateAutomationService = async (id, updateData) => {
  const { name, active } = updateData;
  console.log(active);
  
  const automation = await Automation.findByIdAndUpdate(
    id,
    {
      name,
      active,
    },
    { new: true }
  );

  if (!automation) {
    throw new Error("No automation found");
  }

  return automation;

  //  const notification = await Notification.findById(id).exec();
  //   if (!notification) {
  //     return res.status(400).json({ message: "No Notification found" });
  //   }

  //   let notificationStatus = notification.status;

  //   notificationStatus =
  //     notificationStatus === "unread" ? "read" : notificationStatus;

  //   notification.status = notificationStatus;

  //   await notification.save();

  //   const notifications = await Notification.find()
  // .sort({ createdAt: -1 })
  // .lean();
};

const addListenerToAutomation = async (automationId, listenerData) => {
  try {
    const updatedAutomation = await Automation.findByIdAndUpdate(
      automationId,
      {
        $push: {
          listener: listenerData,
        },
      },
      { new: true }
    );

    return updatedAutomation;
  } catch (err) {
    console.error("Error adding listener:", err);
    throw err;
  }
};

const saveTriggerService = async (automationId, triggerDataArray) => {
  try {
    if (!Array.isArray(triggerDataArray) || triggerDataArray.length === 0) {
      throw new Error("Invalid trigger input");
    }

    const triggerArray = triggerDataArray.map((trigger) => ({
      type: trigger.type,
      automationId: automationId,
    }));

    const updatedAutomation = await Automation.findByIdAndUpdate(
      automationId,
      { $set: { trigger: triggerArray } },
      { new: true }
    ).lean();

    return updatedAutomation;
  } catch (err) {
    console.error("Error saving trigger:", err.message);
    throw err;
  }
};

const keywordsService = async (automationId, keyword) => {
  try {
    const updatedKeyword = await Automation.findByIdAndUpdate(
      automationId,
      {
        $push: {
          keywords: keyword,
        },
      },
      { new: true }
    ).lean();
    return updatedKeyword;
  } catch (err) {
    console.error("Error saving trigger:", err.message);
    throw err;
  }
};

const savePostsService = async (automationId, posts) => {
  try {
    const savePosts = await Automation.findByIdAndUpdate(
      automationId,
      {
        $push: {
          posts: posts,
        },
      },
      { new: true }
    ).lean();
    return savePosts;
  } catch (err) {
    console.error("Error saving Posts:", err.message);
    throw err;
  }
};

module.exports = {
  createAutomationService,
  getUserAutomationsService,
  getAutomationInfoService,
  updateAutomationService,
  addListenerToAutomation,
  saveTriggerService,
  keywordsService,
  savePostsService,
};
