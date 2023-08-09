import config from "../../config/index.js";
import User from "../../models/User.js";
import jwt from "jsonwebtoken";

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "User does not exist" });
        }
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ error: "Incorrect password" });
        }
        const token = jwt.sign({ publicId: user.publicId }, config.jwtSecret, { expiresIn: config.jwtExp });
        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export default loginUser;