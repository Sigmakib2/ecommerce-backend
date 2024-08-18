// express-backend/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const Product = require('../models/productModel');

// POST /api/products - Add a new product
router.post('/', protect, async (req, res) => {
    const { name, description, price, imageUrl } = req.body;

    try {
        const product = new Product({
            name,
            description,
            price,
            imageUrl,
        });

        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add product' });
    }
});

module.exports = router;
