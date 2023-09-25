const express = require("express");
const prisma = require("../db");
const { getAllProducts, postProductById, deleteProductById } = require("./product.service");



const router = express.Router();


router.get("/", async (req, res) => {
    const product = await getAllProducts();
    res.send(product);
});





router.post("/", async (req, res) => {
    const productData = req.body;
    const productResponse = await postProductById(productData);
    res.send({
        data: productResponse,
        message: "Data berhasil ditambah!"
    })
})

router.delete("/:id", async (req, res) => {
    try {
        const productId = req.params.id;
        await deleteProductById(parseInt(productId))
        res.send({
            message: "Data berhasil dihapus"
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
})



module.exports = router;

