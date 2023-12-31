const prisma = require("../db");

const getAllUsers = async () => {
    const user = await prisma.user.findMany();
    return user;
}

// GET user by ID
const findUserById = async (id) => {
    if (typeof id !== "number") {
        throw Error("Id harus number")
    }
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id),
        }
    })
    if (!user) {
        throw new Error("User tidak ada")
    }
    await prisma.user.findUnique({
        where: {
            id: parseInt(id)
        }
    })
    return user;

}

// POST user
const postUserById = async (productData) => {
    const user = await prisma.user.create({
        data: {
            name: productData.name,
            phone: productData.phone,
            address: productData.address,
            email: productData.email,
            password: productData.password
        }
    })
    return user
}

// DELETE user by ID
const deleteUserById = async (id) => {
    if (typeof id !== "number") {
        throw Error("Id harus number");
    }
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id),
        }
    })
    if (!user) {
        throw new Error("User tidak ada")
    }
    await prisma.user.delete({
        where: {
            id: id,
        }
    })
}

// PATCH user by ID
const patchUserById = async (id, productData) => {
    if (typeof id !== "number") {
        throw Error("ID harus number")
    }
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id),
        }
    })
    if (!user) {
        throw Error("User tidak ada")
    }
    await prisma.user.update({
        where: {
            id: parseInt(id)
        },
        data: {
            name: productData.name,
            phone: productData.phone,
            address: productData.address,
            email: productData.email,
            password: productData.password
        }
    })
    return user;
}

module.exports = {
    getAllUsers,
    postUserById,
    deleteUserById,
    patchUserById,
    findUserById,
}