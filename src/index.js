const express = require("express");
const dotenv = require("dotenv");
const prisma = require("./db");
const cors = require("cors");
const { config } = require('dotenv');
const userController = require("./user/user.controller");
const productController = require("./product/product.controller");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;




// router.get("/", async (req, res) => {
//     const product = await prisma.product.findMany();
//     res.send(product);
// });

app.get("/reviews", async (req, res) => {
    const review = await prisma.review.findMany();
    res.send(review);
})
// app.get("/products", async (req, res) => {
//     const product = await prisma.product.findMany();
//     res.send(product);
// })
app.use("/products", productController);

//coba gitt

app.get("/api", (req, res) => {
    res.send("wassup man");
})

app.use("/user", userController);
// app.use("/product", productController);

app.listen(PORT, () => {
    console.log("Express started at port: " + PORT);
})


