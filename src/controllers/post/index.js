import express from "express";
import createPost from "./createPost.js"
import allPost from "./allPost.js"
import isLoggedIn from "../../middleware/auth.js"
import personalPost from "./personalPost.js"
const router = express.Router()

router.get("", isLoggedIn, allPost);
router.post("/create-post", isLoggedIn, createPost);
router.get("/personal-post", isLoggedIn, personalPost);

export default router;