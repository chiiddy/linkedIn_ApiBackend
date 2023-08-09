import express  from "express";
import account from "../controllers/account/index.js";
import post from "../controllers/post/index.js";
import connect from "../controllers/connect/index.js";

const router = express.Router()


router.use("/account", account);
router.use("/post", post);
router.use("/connect", connect);

export default router;