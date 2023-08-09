import mongoose from "mongoose";
import { v4 } from "uuid";
import bcrypt from "bcrypt";


const CommentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  reply: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  },
  comment: {
    type: String,
    required: true,
  },
  
  createdOn: { type: Date, default: Date.now }
})

export default mongoose.model("Comment", CommentSchema)