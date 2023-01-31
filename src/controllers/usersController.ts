import { Request, Response } from "express";
import { User } from "../models/usersModel.js";
import { UsersDAO } from "../models/usersDAO.js";
import { usersTypes } from "../types/usersTypes.js";

const register = async (req: Request, res: Response) => {
  const userDataObject: usersTypes = {
    uid: req.body.uid,
    name: req.body.name,
    email: req.body.email,
  };

  const user = new UsersDAO();
  await user.getAllUsers();
  const uidData = user.getUserByUid(userDataObject.uid);

  if (uidData === false) {
    const newUser = new User(
      userDataObject.uid,
      userDataObject.name,
      userDataObject.email
    );

    await newUser.register();
    return res.status(201).send({ message: "User Registered", response: true });
  }

  return res
    .status(200)
    .send({ message: "User Already Exist", response: false });
};

export { register };
