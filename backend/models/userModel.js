const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
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

const userdb = mongoose.model("users", userSchema);
module.exports = userdb;