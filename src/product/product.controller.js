const express = require("express");
const prisma = require("../db");
const { getAllProducts } = require("./product.service");



const router = express.Router();


router.get("/", async (req, res) => {
    const product = await getAllProducts();
    res.send(product);
});






module.exports = router;

