import { User } from "../models/usersModel.js";
import { UsersDAO } from "../models/usersDAO.js";
const register = async (req, res) => {
    const userDataObject = {
        uid: req.body.uid,
        name: req.body.name,
        email: req.body.email,
    };
    const user = new UsersDAO();
    await user.getAllUsers();
    const uidData = user.getUserByUid(userDataObject.uid);
    if (uidData === false) {
        const newUser = new User(userDataObject.uid, userDataObject.name, userDataObject.email);
        await newUser.register();
        return res.status(201).send({ message: "User Registered", response: true });
    }
    return res
        .status(200)
        .send({ message: "User Already Exist", response: false });
};
export { register };
//# sourceMappingURL=usersController.js.map