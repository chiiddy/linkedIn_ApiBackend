import User from "../../models/User.js";


const createUser = async (req, res) => {
    try {

        const checkUser = await User.findOne({ email: req.body.email });
        if (checkUser) {
            return res.status(400).json({ error: "User already exists" });
        }
        const user = new User(req.body);
        user.save();
        console.log(user);
        return res.status(201).json({ user });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export default createUser;