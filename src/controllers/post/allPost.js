import Post from '../../models/Post.js';
import User from "../../models/User.js";
import FollowerFollowing from "../../models/FollowerFollowing.js";

const allPost = async (req, res) => {
    try {
        const totalUsers = []
        const totalUsersId = []

        // Aletnative One
        // const users = await FollowerFollowing.find({ user: res.locals.userCredential._id }).select('-user -__v -createdOn -_id')
        // for (let i = 0; i < users.length; i++) {
        //     const _users = users[i].following
        //     totalUsersId.push(_users);
        // }
        // for (let i = 0; i < totalUsersId.length; i++) {
        //     const _users = await User.findOne({ _id: totalUsersId[i] }).select('-password -email -publicId').populate("posts");
        //     totalUsers.push(_users);
        // }

        // Aletnative Two
        // const users = await FollowerFollowing.find({ user: res.locals.userCredential._id }).select('-user -__v -createdOn -_id').populate({
        //     path: 'following',
        //     select: '-password -email -publicId',
        //     populate: {
        //         path: 'posts',
        //     }
        // })


        // Social media approach
        const users = await FollowerFollowing.find({ user: res.locals.userCredential._id }).select('-user -__v -createdOn -_id')
        for (let i = 0; i < users.length; i++) {
            const _users = users[i].following
            totalUsersId.push(_users);
        }
        
        totalUsersId.push(res.locals.userCredential._id)
        const allPost = await Post.find({ user: { $in: totalUsersId } }).populate("user").sort({ createdOn: -1 });

        return res.status(200).json(allPost);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export default allPost;