import express from "express";
import router from "./routes";
import "reflect-metadata";

const app = express();

app.use(router);

app.listen(8080);
