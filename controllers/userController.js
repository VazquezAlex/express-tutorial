const uuid = require('uuid').v4;

const MOCK_USERS = [
    {
        id: uuid(),
        name: 'Alejandro Vazquez',
        country: 'Mexico'
    }
];

const getAllUsers = (req, res) => {
    res.status(200).json({
        status: 'success',
        date: new Date(),
        data: {
            users: MOCK_USERS
        }
    });
}

const getUserById = (req, res) => {
    const id = req.params.id;

    const user = MOCK_USERS.find(user => user.id === id);

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
}

const saveNewUser = (req, res) => {
    const { country, name } = req.body;

    if (!country || !name) {
        return res.status(500).json({
            status: 'failed',
            message: 'Failed saving the user, please provide all the data.',
        });
    }

    const newUser = {
        id: uuid(),
        name: name,
        country: country
    }

    MOCK_USERS.push(newUser);
    
    res.status(201).json({
        status: 'success',
        'created-at': new Date(),
        data: {
            user: newUser
        }
    })
}

module.exports = {
    getAllUsers,
    getUserById,
    saveNewUser,
}