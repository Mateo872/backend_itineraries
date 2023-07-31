import { connect } from "mongoose";
import { MONGODB_URI } from "../src/config";

(async () => {
  try {
    const db = await connect(MONGODB_URI, { family: 4 });
    console.log("Database is connected to:", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
