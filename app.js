// Third party imports.
const express = require('express');

const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');

// Create express app.
const app = express();

app.use(express.json());

// Base sample of a route 👇🏻.
// app.get('/api/v1', () => {
//     console.log('Hey, how are you?');
// });

app.use('/api/v1/users', userRouter);

app.use('/api/v1/products', productRouter);

module.exports = app;