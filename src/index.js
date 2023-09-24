const express = require("express");
const dotenv = require("dotenv");
const prisma = require("./db");
const cors = require("cors");
const { config } = require('dotenv');


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.get("/user", async (req, res) => {
    const user = await prisma.user.findMany();
    res.send(user);
})


app.get("/api", (req, res) => {
    res.send("wassup man");
})

app.listen(PORT, () => {
    console.log("Express started at port: " + PORT);
})




