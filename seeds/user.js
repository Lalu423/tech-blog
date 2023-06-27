const { User } = require('../models');

const userData = [
    {
        username: "Lalu",
        email: "lalu@gmail.com",
        password: "lalu989"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;