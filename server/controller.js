import { User, db } from "./model.js";

// Define your handler function
const handlerFunctions = {
  getUser: async (req, res) => {
    const user = await User.findByPk(req.params.userId);
    res.send(user);
  },
  // login: async (req, res) => {
  //   const { username, password } = req.body;

  //   // console.log(req.body)

  //   const user = await User.findOne({
  //     where: {
  //       username: username,
  //     },
  //     include: [
  //       {
  //         model: Rating,
  //       },
  //       {
  //         model: Item,
  //       },
  //     ],
  //   });

  //   if (!user) {
  //     res.json("No username found");
  //     return;
  //   }

  //   const authenticated = bcryptjs.compareSync(password, user.password);

  //   if (!authenticated) {
  //     res.json("Password incorrect");
  //     return;
  //   }

  //   req.session.user = user;

  //   // console.log(req.session.user)

  //   res.json({
  //     message: "Login successful",
  //     userId: user.userId,
  //   });
  // },
};

export default handlerFunctions;
