import Post from '../../models/Post.js';
import User from "../../models/User.js";

const personalPost = async (req, res) => {
    try {
        const user = await User.findOne({ publicId: res.locals.userCredential.publicId }).populate("posts");
        return res.status(200).json({ posts: user.posts});
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export default personalPost;