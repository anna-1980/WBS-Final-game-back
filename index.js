import "dotenv/config.js";
import "./db/mongoose.js";
import express from "express";
import gamesRouter from "./routes/gameRouter.js";
import scoreRouter from "./routes/scoreRouter.js";
import errorHandler from "./middlewares/errorHandler.js";
import cors from "cors";

const app = express();
app.use(cors({ origin: "*" }));
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/games/", gamesRouter);
app.use("/api/scores/", scoreRouter); //for the scores
app.use("*", (req, res) => res.send("Blog API"));
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
