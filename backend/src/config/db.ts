import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    if (process.env.MONGO_URI) await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB CONNECTED SUCCESSFULLY");
  } catch (error) {
    console.log("Error connecting to MONGODB", error);
    process.exit(1);
  }
};
