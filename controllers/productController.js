const uuid = require('uuid').v4;

const MOCK_PRODUCTS = [
    {
        id: uuid(),
        name: 'Bycicle',
        price: 200
    }
]

const getAllProducts = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            products: MOCK_PRODUCTS
        }
    })
}

module.exports = {
    getAllProducts,
}