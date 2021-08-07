import express, { Request, Response, NextFunction } from "express";

const app = express();
const router = express.Router();

// root of the screen
app.get("/", (_req: Request, res: Response) => {
  return res.send("welcome to serverless");
});

app.use("/schedule", router);

router.use((_req: Request, _res: Response, next: NextFunction) => {
  // console.log("router middleware");
  next();
});

router.get("/events", (_req: Request, res: Response, _next: NextFunction) => {
  res.send("Upcoming events starting from soon.");
});

export default app;
