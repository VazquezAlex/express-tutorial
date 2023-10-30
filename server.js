// Third party imports.
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

// Local imports.
const app = require('./app');

mongoose.connect(process.env.DB_CONNECTION)
    .then(connection => {
        console.log('Successfully connected');
    })
    .catch( console.log );

app.listen(3500, () => {
    console.log('The server is live');
});