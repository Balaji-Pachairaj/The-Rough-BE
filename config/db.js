const mongoose = require("mongoose");

const connectDB = async (
  callBackFunction = () => {
    console.log("connect Database la Call Back function illa da pu***");
  }
) => {
  const uri = process.env.MONGO_URI;
  if (!uri) {
    console.error("MONGO_URI not set in environment");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri, {});
    console.log("MongoDB connected");
    callBackFunction();
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
