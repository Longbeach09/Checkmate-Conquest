import express from "express";
import morgan from "morgan";
import session from "express-session";
import ViteExpress from "vite-express";

const app = express();
app.use(express.json());

app.listen("8000", () => {
  console.log;
});

// ViteExpress.listen(app, 5376, () => console.log("if this shows up your saved"));
