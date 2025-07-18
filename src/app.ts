import express from "express";
import router from "./routers/routes";

export default function createApp() {
  const app = express();
  app.use(express.json());
  app.use("/api", router);
  return app;
}
