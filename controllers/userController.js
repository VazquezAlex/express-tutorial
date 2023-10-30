// Third party imports.
const uuid = require('uuid').v4;

// Local imports.
const User = require('./../models/userModel');

const MOCK_USERS = [
    {
        id: uuid(),
        name: 'Alejandro Vazquez',
        country: 'Mexico'
    }
];

const getAllUsers = async (req, res) => {

    const users = await User.find();

    res.status(200).json({
        status: 'success',
        date: new Date(),
        data: {
            users
        }
    });
}

const getUserById = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id);
    
        if (!user) {
            return res.status(404).json({
                status: 'failed',
                message: 'We could not find a user with that id.'
            })
        }
    
        res.status(200).json({
            status: 'success',
            data: {
                user: user
            }
        });
    } catch (e) {
        res.status(500).json({
            status: 'failed',
            message: e
        })
    }

}

const saveNewUser = async (req, res) => {
    const { country, name } = req.body;

    if (!country || !name) {
        return res.status(500).json({
            status: 'failed',
            message: 'Failed saving the user, please provide all the data.',
        });
    }

    try {
        const user = await User.create(req.body);
        
        res.status(201).json({
            status: 'success',
            'created-at': new Date(),
            data: {
                user
            }
        })
    } catch (e) {
        res.status(500).json({
            status: 'failed',
            message: e
        })
    }
 
 }

module.exports = {
    getAllUsers,
    getUserById,
    saveNewUser,
}