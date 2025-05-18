const mongoose = require("mongoose");

const dropClerkIdIndex = async () => {
  try {
    const db = mongoose.connection.db;
    const indexes = await db.collection("users").indexes();

    const clerkIndex = indexes.find((index) => index.name === "clerkId_1");

    if (clerkIndex) {
      console.log("Dropping index: clerkId_1");
      await db.collection("users").dropIndex("clerkId_1");
      console.log("Index dropped successfully.");
    } else {
      console.log("No clerkId_1 index found.");
    }
  } catch (error) {
    console.error("Error dropping index:", error);
  }
};

module.exports = dropClerkIdIndex;
