import "dotenv/config";
import express from "express";
import router from "./routes";
import "reflect-metadata";
import { AppDataSource } from "./data-source";

const app = express();
AppDataSource.initialize()
  .then(() => console.log("sucessfully database initialized"))
  .catch((error) => console.log(error));
app.use(express.json());
app.use(router);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested, Content-Type, Accept Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, GET, DELETE");
    return res.status(200).json({});
  }
  next();
});

const port = process.env.PORT || 3000;

app.listen(port);
