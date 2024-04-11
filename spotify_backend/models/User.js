const  mongoose = require("mongoose");
// step1: import a mongoose
// step2: create a mongoose schema
// step3: create a model

const User=new mongoose.Schema({
        firstName:{
            type:String,
            required: false
        },
        lastName:{
            type:String,
            required:false
        },
        email:{
            type:String,
            required: true
        },
        userName:{
            type:String,
            required: true,
        },
        likedSongs:{
            type: String,// will change to array later
            default:""
        },
        likedPlaylists:{
            type: String, //will change to array later
            default:""
        },
        subscribedArtists:{
            type: String,
            default:""
        }
})

const UserModel = mongoose.model("User",User) // schema is being created to a model
module.exports = UserModel; // model i sexported as UserModel