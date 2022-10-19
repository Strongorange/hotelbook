import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/hotelapp");
  } catch (e) {
    throw e;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("DB disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("DB connected");
});

connect();
