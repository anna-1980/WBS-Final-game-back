import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const scoreModel = new Schema ({
  game: {type: String, required: true}, 
  playerName: {type: String, required: true}, 
  score: {type: Number, required: true}, 
  date: {type: Date, default: Date.now }
});

export default model('Score', scoreModel);

