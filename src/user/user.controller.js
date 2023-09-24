const express = require("express");
const prisma = require("../db");
const { getAllUsers, postUserById, deleteUserById, patchUserById } = require("./user.service");


const router = express.Router();

router.get("/", async (req, res) => {
    const user = await getAllUsers();
    res.send(user);
})


router.post("/", async (req, res) => {
    const userData = req.body;
    const user = await postUserById(userData);
    res.send({
        data: user,
        message: "Data berhasil dibuat"
    });
})


router.delete("/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        await deleteUserById(parseInt(userId))
        res.send("User berhasil dihapus");
    } catch (error) {
        res.status(400).send(error.message)
    }
})


router.patch("/:id", async (req, res) => {
    const userId = req.params.id;
    const userData = req.body;
    const user = patchUserById(parseInt(userId), userData)
    res.send({
        data: user,
        message: "Data berhasil update"
    })
})

module.exports = router;

