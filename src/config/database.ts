import dns from "node:dns";
import mongoose from "mongoose";
import { env } from "./env";

dns.setServers(["8.8.8.8", "1.1.1.1"]);
const uri = env.mongoURI;

export const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${(error as Error).message}`);
    process.exit(1);
  }
};

export const disconnectDB = async (): Promise<void> => {
  await mongoose.disconnect();
};