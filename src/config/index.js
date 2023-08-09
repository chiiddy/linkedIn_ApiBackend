import "dotenv/config";

const PORT = process.env.PORT || 7000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/linkedinAPI";
const jwtSecret = process.env.JWT_SECRET || "na-only-you-waka-come";
const jwtExp = process.env.JWT_EXP || "1d"


const config = {
    database: {
        url: DATABASE_URL
    },
    PORT: PORT,
    jwtSecret,
    jwtExp
}
export default config;