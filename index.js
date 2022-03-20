const express = require("express");
const dbConnect = require("./config/dbconnect");
const usersRoute = require("./Routes/usersRoute");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();
// DB Connect
dbConnect();
app.use(cors());
// Passing BODY Data
app.use(express.json());

// ROUTES
app.use("/api/users", usersRoute);

// SERVER
const PORT = process.env.PORT || 9000;
app.get("/", (req, res) => {
  res.send("HELLO WELCOME");
});

app.listen(PORT, () => console.log("App is Started", PORT));
