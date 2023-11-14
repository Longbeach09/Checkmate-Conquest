import { User, db } from "./model.js";
import session from "express-session";

// Define your handler function
const handlerFunctions = {
  getUser: async (req, res) => {
    const user = await User.findByPk(req.params.userId);
    res.send(user);
  },
  login: async (req, res) => {
    const { username, password } = req.body;

    console.log(req.body);

    const user = await User.findOne({
      where: {
        username: username,
      },
    });

    if (!user) {
      res.send({ message: "No username found" });
      return;
    }

    const authenticated = password === user.password;

    if (!authenticated) {
      res.send({ message: "Password incorrect" });
      return;
    }

    req.session.user = user;

    // console.log(req.session.user)

    res.send({
      message: "Login successful",
      username: user.username,
    });
  },
  register: async (req, res) => {
    const { username, password, email } = req.body;

    console.log(req.body);

    const user = await User.findOne({
      where: {
        username: username,
      },
    });
    if (user) {
      res.send({ message: "username was taken sucks to suck" });
      return;
    }

    const newUser = await User.create({
      username: username,
      password: password,
      email: email,
    });

    req.session.user = newUser;

    res.send({
      message: "account created",
      userId: newUser.userId,
    });
  },
  logout: async (req, res) => {
    await req.session.destroy();
    res.send("logged out");
  },
};

export default handlerFunctions;
