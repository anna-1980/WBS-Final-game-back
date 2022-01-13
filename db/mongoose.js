import mongoose from "mongoose";

// const url = prosecc.evn.MONGO_URI;
mongoose.connect('mongodb+srv://Anna:aniagopi@cluster0.iyit3.mongodb.net/catsCollection?retryWrites=true&w=majority');

const Cat = mongoose.model('Cat', {
    name: 'string'
});

const kitty = new Cat({ name: 'Tiger'});
kitty.save().then(() => console.log('this is my new tiger'));