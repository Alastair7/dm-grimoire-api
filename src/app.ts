import express from "express";
import appRouter from "./routes/appRouter"; 

const app = express();
const port = 3000;

app.use('/', appRouter);

app.listen(port, () => {
  console.log(`Server listening in port: ${port}`)
})