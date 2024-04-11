const mongoose = require("mongoose");
// step1: import a mongoose
// step2: create a mongoose schema
// step3: create a model

const Playlist = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.Types.ObjectId(), // artist ID refers to user ID so it is taken in the form of ObjectID
        ref: "User" // the id i sreferenced from the User document which has been created in mongoose
    },
    songs: [{
        type: mongoose.Types.ObjectId(),
        required: "Song"
    }],
    collaboraters: [{
        type: mongoose.Types.ObjectId(),
        required: "User"
    }],
})

const PlaylistModel = mongoose.model("Playlist", Playlist) // schema is being created to a model
module.exports = PlaylistModel; // model i sexported as UserModel