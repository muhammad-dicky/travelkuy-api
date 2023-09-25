const express = require("express");
const prisma = require("../db");
const { getAllProducts, postProductById, deleteProductById, getProductById, patchProductById } = require("./product.service");



const router = express.Router();

// GET product
router.get("/", async (req, res) => {
    const product = await getAllProducts();
    res.send(product);
});

// GET product by ID
router.get("/:id", async (req, res) => {
    try {
        const productId = req.params.id;
        const productResponse = await getProductById(parseInt(productId));
        res.send(productResponse);
    } catch (error) {
        res.status(400).send(error.message);
    }
})

// POST product
router.post("/", async (req, res) => {
    const productData = req.body;
    const productResponse = await postProductById(productData);
    res.send({
        data: productResponse,
        message: "Data berhasil ditambah!"
    })
})

// PATCH product by ID
router.patch("/:id", async (req, res) => {
    const productId = req.params.id;
    const productData = req.body;
    const productResponse = await patchProductById(parseInt(productId), productData)
    res.send({
        data: productResponse,
        message: "Produk berhasil di update"
    })
})

// DELETE product by ID
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

