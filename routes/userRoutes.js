// Third party modules.
const express = require('express');

// Local imports.
const {
    getAllUsers
} = require('./../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);

module.exports = router;