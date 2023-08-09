import Post from '../../models/Post.js';
import User from "../../models/User.js";

const createPost = async (req, res) => {
    try {
        const post = new Post(req.body);
        post.user = res.locals.userCredential._id;
        post.save();
        const user = res.locals.userCredential;
        await User.findOneAndUpdate({ publicId: user.publicId }, { $push: { posts: post._id } }, { new: true, useFindAndModify: false });
        return res.status(201).json({ message: "Post created successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export default createPost;