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

const port = process.env.PORT || 3000;

app.listen(port);
