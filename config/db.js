// ==================== config/db.js ====================
import mongoose from 'mongoose';

const connectDB = async () => {
  try {

    await mongoose.connect("mongodb://127.0.0.1:27017/codesForTomorrow");
    
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
};

export default connectDB;
