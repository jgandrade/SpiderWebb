import express, { Request, Response } from "express";
import * as usersRoutes from "./routes/usersRoutes.js";
import cors from "cors";
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/", usersRoutes.router);

app.listen(port, () => console.log("RUNNING ON PORT " + port));
