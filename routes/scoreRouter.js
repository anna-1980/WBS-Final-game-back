import { Router } from "express";
import { saveScore, getScoresByGame } from "../controllers/scores.js";

const scoreRouter = Router();

scoreRouter.route("/").post(saveScore);

scoreRouter.route("/:name").get(getScoresByGame);

export default scoreRouter;
