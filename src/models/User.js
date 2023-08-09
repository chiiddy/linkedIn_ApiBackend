import mongoose from "mongoose";
import { v4 } from "uuid";
import bcrypt from "bcrypt";


const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
  },
  publicId: {
    type: String,
    default: v4(),
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }],
  createdOn : { type : Date, default: Date.now }
}).pre('save', async function (next) {
  // Check if the password has been modified
  if (!this.isModified('password')) {
    return next();
  }

  // Hash and salt the password
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);

  // Call the next middleware function
  next();
});
UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password.valueOf(), this.password);
};

export default mongoose.model("User", UserSchema)