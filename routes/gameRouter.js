import { Router } from 'express';
import { createGame, deleteGame, getAllGames, getSingleGame, updateGame } from '../controllers/games.js';

const gamesRouter = Router();

gamesRouter.route('/').get(getAllGames).post(createGame);

gamesRouter.route('/:id').get(getSingleGame).put(updateGame).delete(deleteGame);

export default gamesRouter;
