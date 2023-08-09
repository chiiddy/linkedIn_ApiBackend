import express from "express";
import isLoggedIn from "../../middleware/auth.js"
import followingUnfollow from "./following.js"
import getFollowers from "./getFollowers.js"

const router = express.Router()

router.post("/follow-unfollow", isLoggedIn, followingUnfollow);
router.get("/followers", isLoggedIn, getFollowers);

export default router;