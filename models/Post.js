import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const gameschema = new Schema ({
  title: {type: String, required: true}, 
  url: {type: String, required: true}, 
  author: {type: String, required: true}, 
  date: {type: Date, default: Date.now }

});

// const NewGame = model('Game', gameschema);

export default model('Post', gameschema);

