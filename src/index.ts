import express, { Request, Response } from "express";
import cors from "cors";
import { add, del } from "./db-config.js";
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.send("Hello Welcome to the Backend");
});

app.post("/create", (req, res) => {
  const data = req.body;
  add(data).then((data:any) => console.log(data));
  return res.send("User added");
});

app.delete("/delete", (req, res) => {
  const data = req.body.id;
  del(data).then((data:any) => console.log(data));
  //   return res.send("User deleted");
});

app.listen(port, () => console.log("RUNNING ON PORT " + port));
