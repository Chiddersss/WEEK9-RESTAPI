const User = require('./model');

const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    try {
        console.log("next called and inside controller")
        // const user = await User.create({
        //     username: req.body.username,
        //     email: req.body.email,
        //     password: req.body.password
        // })

        const user = await User.create(req.body)
        res.status(201).json({
            message: "User created successfully",
            user: { username: req.body.username, email: req.body.email }
        })

    } catch {
        res.status(501).json({errorMessage: error.message, error: error})
    }
}

//TODO: add the rest of the CRUD operations
// getAllUsers
// updateUser
// deleteUser

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        for (let user of users) {
            user.password = " "
        }
        res.status(200).json({users: users})
    } catch (error) {
        res.status(501).json({errorMessage: error.message, error: error})
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.update(req.body, {
            where: { id: req.params.id }
        })
        res.status(200).json({user: user})
    } catch (error) {
        res.status(501).json({errorMessage: error.message, error: error})
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json({user: user})
    } catch (error) {
        res.status(501).json({errorMessage: error.message, error: error})
    }
}

module.exports = {
    registerUser,
    getAllUsers,
    updateUser,
    deleteUser   
}