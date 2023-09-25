const express = require("express");
const prisma = require("../db");
const { getAllUsers, postUserById, deleteUserById, patchUserById, findUserById } = require("./user.service");


const router = express.Router();

router.get("/", async (req, res) => {
    const user = await getAllUsers();
    res.send(user);
})

// GET user by ID
router.get("/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await findUserById(parseInt(userId))
        res.send(user)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

// POST user
router.post("/", async (req, res) => {
    try {
        const userData = req.body;
        const user = await postUserById(userData);
        res.send({
            data: user,
            message: "Data berhasil dibuat"
        });
    } catch (error) {
        res.status(400).send(error.message)
    }
})

// DELETE user by ID
router.delete("/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        await deleteUserById(parseInt(userId))
        res.send("User berhasil dihapus");
    } catch (error) {
        res.status(400).send(error.message)
    }
})

// PATCH user by ID
router.patch("/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const user = patchUserById(parseInt(userId), userData)
        res.send({
            data: user,
            message: "Data berhasil update"
        })
    } catch (error) {
        res.status(400).send(error.message)
    }
})

module.exports = router;

