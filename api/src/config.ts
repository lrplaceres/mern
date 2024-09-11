import dotenv from "dotenv";
dotenv.config();

export default {
  MONGO_DATABASE: process.env.MONGO_DATABASE || "mern-database",
  MONGO_HOST: process.env.MONGO_HOST || "localhost",
  MONGO_PORT: process.env.MONGO_PORT || "27017",
  APP_PORT: process.env.APP_PORT = "4000" || "3000",
};
