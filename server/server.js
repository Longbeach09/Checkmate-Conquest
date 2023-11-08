import express from "express";
import morgan from "morgan";
// import session from "express-session";
import ViteExpress from "vite-express";
const app = express();
app.use(express.json());

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false })); //helps with incription
app.use(express.static("public"));
app.use(express.json());
// app.post("/accCreate/Register", handlerFunctions.registerUser);

// import handler functions
import handlerFunctions from "./controller.js";
// Routes go here
app.get("/users/:userId", handlerFunctions.getUser);
// app.post("");
// open a door to the server
ViteExpress.listen(app, 7777, () =>
  console.log(`if this shows up we've done it http://localhost:7777`)
);

// ViteExpress.listen(app, 5376, () => console.log("if this shows up your saved"));
