import FollowerFollowing from "../../models/FollowerFollowing.js";


const followingUnfollow = async (req, res) => {
    try {
        const payload = { 
            user: res.locals.userCredential._id, 
            following: req.body.userId };
        const findUser = await FollowerFollowing.findOne(payload);
        if (findUser) {
            await FollowerFollowing.findOneAndDelete(payload);
            return res.status(200).json({ message: "Unfollowed successfully" });
        }
        await FollowerFollowing.create(payload);
        return res.status(200).json({ message: "Following successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export default followingUnfollow;