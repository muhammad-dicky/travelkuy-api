const prisma = require("../db");

const getAllUsers = async () => {
    const user = await prisma.user.findMany();
    return user;
}

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


module.exports = {
    getAllUsers,
    postUserById,
    deleteUserById
}