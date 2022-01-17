import { Router } from "express";
import { saveScore, getScoresByGame, getAllScores } from "../controllers/scores.js";

const scoreRouter = Router();

scoreRouter.route("/").post(saveScore).get(getAllScores);

scoreRouter.route("/:name").get(getScoresByGame);

export default scoreRouter;
