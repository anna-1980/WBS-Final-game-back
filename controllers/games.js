import asyncHandler from '../middlewares/asyncHandler.js';
import Game from '../models/NewGame.js';
import ErrorResponse from '../utils/ErrorResponse.js';
// import Post from '../models/Post.js'

export const getAllGames = asyncHandler(async (req, res, next) => {
    //if you want to add a quert
    // const { query } = req;
    const games = await Game.find();
    res.json(games);
});

export const createGame = asyncHandler(async (req, res) => {
    const newGame = await Game.create({
        title: 'FINAL COUNTDOWN', 
        url: 'https://angry-viruses.netlify.app', 
        author: "By ME ", 
    });
    res.status(201).json(newGame);
});

export const getSingleGame = asyncHandler(async (req, res) => {

const {
    params: { id }
} = req;

const game = await Game.findById(id);
if(!game) throw new ErrorResponse( `Game with ID of ${id} not found` , 404)

res.json(game);

});

export const updateGame = asyncHandler(async (req, res) => res.send('PUT'));

export const deleteGame = asyncHandler(async (req, res) => res.send('DELETE'));
