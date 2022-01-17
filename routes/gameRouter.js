import { Router } from 'express';
import multer from 'multer'
import { createGame, deleteGame, getAllGames, getSingleGame, updateGame } from '../controllers/games.js';

const storage = multer.memoryStorage()
const upload = multer({ storage})

const gamesRouter = Router();

gamesRouter.route('/').get(getAllGames).post(upload.single('game'), createGame);

gamesRouter.route('/:id').get(getSingleGame).put(updateGame).delete(deleteGame);

export default gamesRouter;
