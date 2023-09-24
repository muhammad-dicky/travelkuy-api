const express = require("express");
const dotenv = require("dotenv");
const prisma = require("./db");
const cors = require("cors");
const { config } = require('dotenv');
const userController = require("./user/user.controller");


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;


app.delete("/user/:id", async (req, res) => {
    const userId = req.params.id
    const user = await prisma.user.delete({
        where: {
            id: parseInt(userId),
        }
    })
    res.send({
        data: user,
        message: "Data berhasil dihapus"
    });
})


app.get("/api", (req, res) => {
    res.send("wassup man");
})

app.use("/user", userController);

app.listen(PORT, () => {
    console.log("Express started at port: " + PORT);
})




