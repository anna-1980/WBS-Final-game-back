import asyncHandler from '../middlewares/asyncHandler.js';
import Game from '../models/NewGame.js';
// import Post from '../models/Post.js'

export const getAllPosts = asyncHandler(async (req, res, next) => res.send('GET all'));

export const createPost = asyncHandler(async (req, res) => {
    const newGame = await Game.create({
        title: 'Virus Invaders', 
        url: 'https://angry-viruses.netlify.app', 
        author: "AnnaMaria", 
    });
    res.status(201).json(newGame);
});

export const getSinglePost = asyncHandler(async (req, res) => res.send('GET single'));

export const updatePost = asyncHandler(async (req, res) => res.send('PUT'));

export const deletePost = asyncHandler(async (req, res) => res.send('DELETE'));
