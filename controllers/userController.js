const MOCK_USERS = [
    {
        id: '1',
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

module.exports = {
    getAllUsers,
}