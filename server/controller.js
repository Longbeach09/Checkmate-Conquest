import { User, db } from "./model.js";

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
      res.send("No username found");
      return;
    }

    const authenticated = password === user.password;

    if (!authenticated) {
      res.send("Password incorrect");
      return;
    }

    req.session.user = user;

    // console.log(req.session.user)

    res.send({
      message: "Login successful",
      userId: user.userId,
    });
  },
};

export default handlerFunctions;
