// username
// email
// password

const { DataTypes } = require('sequelize');
const connectiom = require('../db/connection');

const User = connectiom.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },       
},
{ indexes: [{ unique: true, fields: ['username', 'email'] }]}
)

module.exports = User;