const mongoose = require("mongoose");
const { MONGO_DB_URI } = require("../constants/constants");
exports.dbConnect = async () => {
  try {
    await mongoose.connect(MONGO_DB_URI, { dbName: "workoutapi" });
    console.log("Connection Eastabilished with mongodb");
  } catch (error) {
    console.log("Error Happpen to connect Database", error);
  }
};
