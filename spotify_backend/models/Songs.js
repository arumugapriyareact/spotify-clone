const mongoose = require("mongoose");
// step1: import a mongoose
// step2: create a mongoose schema
// step3: create a model

const Song = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    track: {
        type: String,
        required: true
    },
    artist: {
        type: mongoose.Types.ObjectId(), // artist ID refers to user ID so it is taken in the form of ObjectID
        ref: "User" // the id i sreferenced from the User document which has been created in mongoose
    }
})

const SongModel = mongoose.model("Song", Song) // schema is being created to a model
module.exports = SongModel; // model i sexported as UserModel