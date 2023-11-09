import { Sequelize, DataTypes, Model } from "sequelize";
import connectToDB from "./db.js";
import util from "util";

export const db = await connectToDB("postgresql:///chess-project");

export class User extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: "user",
    sequelize: db,
  }
);

export class Game extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Game.init(
  {
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    winnerId: {
      type: DataTypes.INTEGER,
    },
    startTime: {
      type: DataTypes.DATE,
    },
    endTime: {
      type: DataTypes.DATE,
    },
  },
  {
    modelName: "game",
    sequelize: db,
  }
);

export class Move extends Model {
  [util.inspect.custom]() {
    return this.toJSON();
  }
}

Move.init(
  {
    moveId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    moveText: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    moveNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: "move",
    sequelize: db,
  }
);
// Set up relationships between the tables with foreign keys
Game.hasMany(User, { foreignKey: "gameId" }); // One game can have multiple Users, using the 'gameId' foreign key
User.belongsTo(Game, { foreignKey: "gameId" }); // Each User belongs to one game, using the 'gameId' foreign key

User.hasMany(Move, { foreignKey: "UserId" }); // One User can make multiple moves, using the 'UserId' foreign key
Move.belongsTo(User, { foreignKey: "UserId" }); // Each move belongs to one User, using the 'UserId' foreign key

Game.hasMany(Move, { foreignKey: "gameId" }); // One game can have multiple moves, using the 'gameId' foreign key
Move.belongsTo(Game, { foreignKey: "gameId" }); // Each move belongs to one game, using the 'gameId' foreign key

// Sync the models with the database
// sequelize.sync().then(() => {
//   console.log("Database and tables have been created.");
// });

// Export your models
// module.exports = { Game, User, Move };
