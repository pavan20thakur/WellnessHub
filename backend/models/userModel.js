const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    picture: {
        type: String
    },

    profile:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserProfile', // Reference to the user who authored the reply
    },
    authCode: {
        type: String
    },
    waterGoal: {
        type: Number,
        default: 8,
    },
    meditationGoal: {
        type: Number,
        default: 900
    },
    exerciseGoal: {
        type: Number,
        default: 3600
    },
    feeling: {
        type: String,
        default: ""
    },
    stressLevel: {
        type: Number,
        default: 0
    },
},
{
    timestamps: true
}) 

module.exports = mongoose.model("User", userSchema)


