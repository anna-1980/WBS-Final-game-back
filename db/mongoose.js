import mongoose from 'mongoose';

try {
    const client = await mongoose.connect(
        'mongodb+srv://Anna:aniagopi@cluster0.iyit3.mongodb.net/myGames?retryWrites=true&w=majority'
    );
    console.log(`Connected to MongoDB ${client.connection.host}`);
} catch (error) {
    console.log(error);
}










// import mongoose from "mongoose";


// mongoose.connect('mongodb+srv://Anna:aniagopi@cluster0.iyit3.mongodb.net/myGames?retryWrites=true&w=majority');

// const Game = mongoose.model('Games', {
//     title: String, 
//     url: String,
//     user: String, 
//     date: { type: Date,
//         default: Date.now
//     },
    
// });

// const game = new Game({ 
//     name: 'Virus Invaders', 
//     url: 'https://virus-invaders.netlify.app',
//     user: 'Garry',
   
// });

// game.save().then(() => console.log('One more time just in case'));