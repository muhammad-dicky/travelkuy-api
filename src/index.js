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


//belum selesai
// app.patch("/user/:id", async (req, res) => {
//     const userId = res.params.id;
//     const userData = req.body;
//     const user = await prisma.user.update({
//         where: {
//             id: parseInt(userId),
//         },
//         data: {
//             name: userData.name,
//             phone: userData.phone,
//             address: userData.address,
//             email: userData.email,
//             password: userData.password
//         }
//     })
//     res.send({
//         data: user,
//         message: "Data berhasil update"
//     })
// })


//coba gitt

app.get("/api", (req, res) => {
    res.send("wassup man");
})

app.use("/user", userController);

app.listen(PORT, () => {
    console.log("Express started at port: " + PORT);
})




