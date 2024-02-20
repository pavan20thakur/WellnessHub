const mongoose = require("mongoose");

const userProfileSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Assuming there is a User model linked to this schema
        required: true
    },
    fullname : String,
    community: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CommunityGroup',
    }],
    achievements:[{
        type : String
    }]
    } ,{
    timestamps: true // Adding the timestamps option
});

const UserProfile = mongoose.model('UserProfile', userProfileSchema);

module.exports = UserProfile;
