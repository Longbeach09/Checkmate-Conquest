import { User, db } from "./model.js";

// Define your handler function
const handlerFunctions = {
  getUser: async (req, res) => {
    const user = await User.findByPk(req.params.userId);
    res.send(user);
  },
};
// const userId = req.params.userId;

// // Use the User model to query the database for the user with the given ID
// const user = await User.findByPk(userId);

//     if (user) {
//       res.status(200).json(user);
//     } else {
//       res.status(404).json({ message: "User not found" });
//     }
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

export default handlerFunctions;
