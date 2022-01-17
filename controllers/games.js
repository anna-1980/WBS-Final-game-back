import asyncHandler from "../middlewares/asyncHandler.js";
import Game from "../models/NewGame.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import axios from "axios";
import fs from "fs";
import path from 'path'
import slugify from "slugify";
// import Post from '../models/Post.js'

export const getAllGames = asyncHandler(async (req, res, next) => {
  //if you want to add a quert
  // const { query } = req;
  const games = await Game.find();
  res.json(games);
});

export const createGame = asyncHandler(async (req, res) => {
  // Get the file from request
  const {
    body: { title },
    file: { buffer, originalname },
  } = req;
  // Create new Netlify site
  const {
    data: { site_id, url },
  } = await axios.post(
    `https://api.netlify.com/api/v1/sites`,
    { name: `${slugify(title)}-${Date.now()}` },
    { headers: { Authorization: `Bearer ${process.env.N_TOKEN}` } }
  );
  // Trigger deploy for newly create site
  const deploy = await axios.post(
    `https://api.netlify.com/api/v1/sites/${site_id}/deploys`,
    buffer,
    {
      headers: {
        Authorization: `Bearer ${process.env.N_TOKEN}`,
        "Content-Type": "application/zip",
      },
    }
  );
  // Save game in database
  const newGame = await Game.create({
    title,
    url: `${url}/${path.parse(originalname).name}`,
    author: "By ME ",
  });
  res.status(201).json(newGame);
});

export const getSingleGame = asyncHandler(async (req, res) => {
  const {
    params: { id },
  } = req;

  const game = await Game.findById(id);
  if (!game) throw new ErrorResponse(`Game with ID of ${id} not found`, 404);

  res.json(game);
});

export const updateGame = asyncHandler(async (req, res) => res.send("PUT"));

export const deleteGame = asyncHandler(async (req, res) => res.send("DELETE"));
