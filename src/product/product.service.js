const prisma = require("../db");

const getAllProducts = async () => {
    const products = await prisma.product.findMany();
    return products;
}


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
}