import mongoose from "mongoose";
import { v4 } from "uuid";
import bcrypt from "bcrypt";


const LikeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  },
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  },
  likeType: {
    type: String,
    enum: ["thumbUp","heart","insightful","support","celebrate","funny"] 
  },
  createdOn: { type: Date, default: Date.now }
})

export default mongoose.model("Like", LikeSchema)