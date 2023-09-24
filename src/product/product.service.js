const prisma = require("../db");

const getAllProducts = async () => {
    const products = await prisma.product.findMany();
    return products;
}



module.exports = {
    getAllProducts,
}