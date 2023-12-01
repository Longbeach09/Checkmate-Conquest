import { User, Game, db } from "./model.js";
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
  // getPlayers: async (req, res) => {
  //   const { whitePlayer, blackPlayer } = req.body;

  //   console.log(req.body);

  //   const playerOne = await User.findOne({
  //     where: {
  //       username: whitePlayer,
  //     },
  //   });
  //   if (!playerOne) {
  //     res.send({ message: "not a valid user for white player" });
  //     return;
  //   }
  //   const playerTwo = await User.findOne({
  //     where: {
  //       username: blackPlayer,
  //     },
  //   });
  //   if (!playerTwo) {
  //     res.send({ message: "not a valid user for black player" });
  //     return;
  //   }

  //   // Note: Possibly dead code
  //   req.session.playerOne = whitePlayer;
  //   req.session.playerTwo = blackPlayer;

  //   res.send({
  //     message: "success have fun",
  //     whitePlayer: playerOne.username,
  //     blackPlayer: playerTwo.username,
  //   });
  // },

  // Game handlerFunctions
  createGame: async (req, res) => {
    const { whitePlayer, blackPlayer } = req.body;

    const white = await User.findOne({
      where: {
        username: whitePlayer,
      },
    });
    if (!white) {
      res.send({ message: "not a valid user for white player" });
      return;
    }

    const black = await User.findOne({
      where: {
        username: blackPlayer,
      },
    });
    if (!black) {
      res.send({ message: "not a valid user for black player" });
      return;
    }

    console.log({ white: white.userId, black: black.userId });

    const game = await Game.create({
      gameState: "in progress",
      whitePlayer: white.userId,
      blackPlayer: black.userId,
    });

    // req.session.playerOne = whitePlayer;
    // req.session.playerTwo = blackPlayer;

    res.send({
      game,
      whitePlayer: white.username,
      blackPlayer: black.username,
      message: "success have fun",
    });
  },
  getGame: async (req, res) => {
    const { gameId } = req.body;
    const game = await Game.findOne({ where: { gameId } });
    if (!game) {
      res.status(404).send("Game not found."); // 404 message;
    }
    res.send(game);
  },
  saveGame: async (req, res) => {
    const { gameId, gameState, winnerId } = req.body;
    const game = await Game.findOne({ where: { gameId } });

    if (!game) {
      res.status(404).send("Game not found."); // 404 message;
    }

    if (gameState) {
      game.gameState = gameState;
    }

    if (winnerId) {
      game.winnerId = winnerId;
    }

    game.save();

    res.status(200).send();
  },
};

export default handlerFunctions;
