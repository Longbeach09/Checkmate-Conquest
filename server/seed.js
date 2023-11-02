// Import your models and database connection
import { User, Game, Move } from "./model.js";
import { db } from "./model.js";

// Synchronize the database (without force: true if you want to keep existing data)
console.log("Syncing database...");

await db.sync({ force: true });
console.log("Seeding database...");

// Seed a new user
await User.create({
  username: "test user",
  password: "asdf",
  email: "g@g.com",
});

await Game.create({
  status: "complete",
  winnerId: null,
  startTime: new Date("2023-10-30T00:00:00"),
  endTime: new Date("2023-10-30T00:30:00"),
});

await Move.create({
  moveText: "Your move text here", // Fill in the actual move text.
  moveNumber: 1, // Replace with the actual move number.
  userId: 1, // Replace with the actual user ID.
});

await db.close();
console.log("Finished seeding database!");

// Call the seed function to start the seeding process
