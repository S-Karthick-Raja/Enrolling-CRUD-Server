import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); //All Secret Key Put in .env File;
const app = express();

//Heroku will auto assign available port
const PORT = process.env.PORT;

//cors-3rd party middleware
app.use(cors());

//every request in the app body is parsed as JSON
app.use(express.json()); // express.json() - inbuilt middleware

const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect(); //promise
    console.log("MongoDB Connected Successfully");
    return client;
}

export const client = await createConnection();

app.get("/", (req, res) => {
    res.json({ status: "success", message: "Welcome to Enrolling CRUD Application" });
});

app.listen(PORT || 9001, () => console.log("Server Running in PORT:", PORT));