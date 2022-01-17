import asyncHandler from "../middlewares/asyncHandler.js";
import Score from "../models/Score.js";

export const saveScore = asyncHandler(async (req, res, next) => {
  const {
    body: { game, playerName, score },
  } = req;
  const newScore = await Score.create({ game, playerName, score });
  res.json(newScore);
});

export const getScoresByGame = asyncHandler(async (req, res, next) => {
  const scores = await Score.find({game: req.params.name});
  res.json(scores);
});
