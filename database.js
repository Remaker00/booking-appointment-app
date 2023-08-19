const Sequelize = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('node-complete', 'root', 'Nish@nt9' ,{
    dialect: 'mysql',
    storage: 'localhost'
});

// Define the User model
const User = sequelize.define('User', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    phone_number: Sequelize.INTEGER
});



module.exports = {
    sequelize,
    User
};
