const prisma = require("../db");

// GET all product
const getAllProducts = async () => {
    const products = await prisma.product.findMany();
    return products;
}

// GET product by ID
const getProductById = async (id) => {
    if (typeof id !== "number") {
        throw Error("ID harus number")
    }
    const productResponse = await prisma.product.findUnique({
        where: {
            id: parseInt(id),
        }
    })
    if (!productResponse) {
        throw Error("Data tidak ada")
    }
    return productResponse;
}

// POST product
const postProductById = async (productData) => {
    const product = await prisma.product.create({
        data: {
            name: productData.name,
            price: productData.price,
            description: productData.description,
            image: productData.image,
        }
    })
    return product;
}

const patchProductById = async (id, productData) => {
    if (typeof id !== "number") {
        throw Error("ID harus number")
    }
    const productResponse = await prisma.product.findUnique({
        where: {
            id: parseInt(id),
        }
    })
    if (!productResponse) {
        throw Error("Data tidak ada")
    }
    await prisma.product.update({
        where: {
            id: parseInt(id),
        },
        data: {
            name: productData.name,
            price: productData.price,
            description: productData.description,
            image: productData.image
        }
    })
    return productResponse

}

// DELETE product by ID
const deleteProductById = async (id) => {
    if (typeof id !== "number") {
        throw Error("Id harus number");
    }
    const product = await prisma.product.findUnique({
        where: {
            id: parseInt(id),
        }
    })
    if (!product) {
        throw new Error("Product tidak ada")
    }
    await prisma.product.delete({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllProducts,
    postProductById,
    deleteProductById,
    getProductById,
    patchProductById
}