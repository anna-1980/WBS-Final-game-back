import mongoose from "mongoose";


mongoose.connect('mongodb+srv://Anna:aniagopi@cluster0.iyit3.mongodb.net/myGames?retryWrites=true&w=majority');

const Game = mongoose.model('Games', {
    name: String, 
    url: String,
    user: String, 
    
});

const game = new Game({ 
    name: 'Virus Invaders', 
    url: 'https://virus-invaders.netlify.app',
    user: 'Anna'
});

game.save().then(() => console.log('My first game in the database'));