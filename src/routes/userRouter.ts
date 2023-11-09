import express, { Router, Request, Response } from "express";

const userRouter: Router = express.Router();

// This is a route for specific endpoints which is not too different from what you've seen in appRouter.
userRouter.get("/", (req: Request, res: Response) => {
  res.send("Hello from user router!");
});

// Here you can add more endpoints. For example:
userRouter.get("/test", (req: Request, res: Response) => {
  res.send("Test user route"); // If you start the server and go to http:localhost:3000/users/test
  // You'll get that message.
});

<<<<<<< HEAD
userRouter.get("/senka", (req: Request, res: Response) => {
  res.send("Senka test success!");
});

=======
>>>>>>> development
export default userRouter; // Don't forget to export the module to import it later in appRouter.
