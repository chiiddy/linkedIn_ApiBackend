import mongoose from "mongoose";


const FollowerFollowing = new mongoose.Schema({
  // The user who is following
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  // The user who is being followed
  following: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  createdOn: { type: Date, default: Date.now }
})

export default mongoose.model("FollowerFollowing", FollowerFollowing)