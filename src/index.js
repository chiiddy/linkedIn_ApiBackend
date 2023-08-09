import Express from "express";
import config from "./config/index.js";
import runDatabase from "./models/init.js";
const app = Express();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

import routes from "./routes/index.js";

app.use("",(req, res, next) => {
    return res.redirect("https://documenter.getpostman.com/view/27574579/2s9XxzvDSd")
})
app.use("/api", routes);
app.post("", (req, res) => {
    res.send("Home Page");   
});

app.listen(config.PORT, () => {
    runDatabase()
    console.log(`Server is running on http://localhost:${config.PORT} 🚀`);
});