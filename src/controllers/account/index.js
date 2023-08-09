import express  from "express";
import createUser from "./createUser.js"
import loginUser from "./loginUser.js";

const router = express.Router()

router.post("/create-user", createUser);
router.post("/login", loginUser);

export default router;