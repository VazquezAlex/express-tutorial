// Third party modules.
const express = require('express');

// Local imports.
const {
    getAllUsers,
    getUserById,
    saveNewUser
} = require('./../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.post('/', saveNewUser);

module.exports = router;