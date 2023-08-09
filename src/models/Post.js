import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  files: [{
    file: { type: String, required: true },
    fileType: { type: String, required: true },
  }],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }],
  createdOn: { type: Date, default: Date.now }
})

export default mongoose.model("Post", PostSchema)