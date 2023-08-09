import mongoose from "mongoose";
import config from "../config/index.js"

const runDatabase = () => {
    mongoose.set("strictQuery", true);
    mongoose
        .connect(config.database.url)
        .then(() => {
            console.log("Database Connected and open for business 🛢️");
        })
        .catch(() => {
            console.error("Cannot connect to database 🥲");
        });


}

export default runDatabase;