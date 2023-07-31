import express from "express";
import "./database/dbConnection";
import cors from "cors";
import * as dotenv from "dotenv";
import itineriesRoutes from "./routes/routes";
import userRoutes from "./routes/user.routes";

dotenv.config();
const app = express();

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.use(cors());
app.use(express.json());

app.use("/api", itineriesRoutes);
app.use("/api", userRoutes);
