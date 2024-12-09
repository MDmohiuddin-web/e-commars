import mongoose from "mongoose";

async function bdConnect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/e-shop");
  } catch (error) {
    throw new Error("connect fail");
  }
}

export default bdConnect;
