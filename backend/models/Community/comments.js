import mongoose from "mongoose";

const { Schema } = mongoose;

const replySchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Reference to the user who authored the reply
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now // Set default value to the current date and time
    }
});

const commentSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post', // Reference to the post the comment belongs to
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Reference to the user who authored the comment
        required: true
    },
    content: {
        type: String,
        required: true
    },
    replies: [replySchema], // Array of replies using the replySchema
    createdAt: {
        type: Date,
        default: Date.now // Set default value to the current date and time
    }
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
