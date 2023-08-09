import FollowerFollowing from "../../models/FollowerFollowing.js";


const getFollowers = async (req, res) => {
    try {
        const totalUsers = []
        const users = await FollowerFollowing.find({user: res.locals.userCredential._id}).select('-user').populate("following", "name email"); 
        for (let i = 0; i < users.length; i++) {
            console.log(users[i].following);
            const _users = await FollowerFollowing.find({user: users[i]._id});
            console.log(_users.length);
            totalUsers.push({...users[i].following});
        }
        return res.status(200).json(totalUsers);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export default getFollowers;