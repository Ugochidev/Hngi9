import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

export default {
  port: process.env.PORT || "9090",
  nodeEnv: process.env.NODE_ENV || "production",
dburl: process.env.DATABASE_URL|| "",
};
