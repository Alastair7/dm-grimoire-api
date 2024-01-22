import "reflect-metadata";
import express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import container from "./inversify.config";

const app = express();
const port = 3000;

let server = new InversifyExpressServer(
  container,
  null,
  { rootPath: "/api" },
  app
);

let appConfigured = server.build();

//appConfigured.use("/api", appRouter);

appConfigured.listen(port, () => {
  console.log(`Server listening at: ${port}`);
});
