const { findOneAndUpdate } = require("../models/Automation");
const {
  getUserAutomationsService,
  createAutomationService,
  getAutomationInfoService,
  updateAutomationService,
  addListenerToAutomation,
  saveTriggerService,
  keywordsService,
  savePostsService,
} = require("../service/automation.service");

const getUserAutomations = async (req, res) => {
  const userId = req.user;
  try {
    const automations = await getUserAutomationsService(userId);
    res.json(automations);
  } catch (error) {
    console.log("get user automation error:", error);
  }
};

const getAutomationInfo = async (req, res) => {
  const id = req.params.id;
  try {
    const automation = await getAutomationInfoService(id);
    res.json(automation);
  } catch (error) {
    console.log("get automation info error:", error);
  }
};

const createAutomation = async (req, res) => {
  const userId = req.user;
  try {
    const newAutomation = await createAutomationService(userId);
    res.json(newAutomation);
  } catch (error) {
    console.log("create new automation error", error);
  }
};

const updateAutomation = async (req, res) => {
  const { name, active, id } = req.body;

  try {
    const update = await updateAutomationService(id, { name, active });
    res.json(update);
  } catch (error) {
    console.log("update automation failed", error);
  }
};

const addListener = async (req, res) => {
  const listenerData = req.body;
  const automationId = req.params.id;

  try {
    const updated = await addListenerToAutomation(automationId, listenerData);
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const savePosts = async (req, res) => {
  const posts = req.body;
  const automationId = req.params.id;

  try {
    const savePost = await savePostsService(automationId, posts);
    res.status(200).json(savePost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addTrigger = async (req, res) => {
  const { triggerDataArray } = req.body;
  const automationId = req.params.id;

  try {
    const updatedTrigger = await saveTriggerService(
      automationId,
      triggerDataArray
    );
    res.status(200).json(updatedTrigger);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addKeyword = async (req, res) => {
  const { keyword } = req.body;
  const automationId = req.params.id;

  try {
    const updatedKeyword = await keywordsService(automationId, keyword);
    res.status(200).json(updatedKeyword);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getUserAutomations,
  createAutomation,
  getAutomationInfo,
  updateAutomation,
  addListener,
  addTrigger,
  addKeyword,
  savePosts
};
