const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { ObjectId } = Schema

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    picture: {
        type: String
    },
    profile:{
        type: Schema.Types.ObjectId,
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
    
 

}, { timestamps: true })

module.exports = mongoose.model("User", userSchema)


