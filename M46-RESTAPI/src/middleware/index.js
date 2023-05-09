const User = require("../users/model");
const byCrypt = require("bcrypt");

const hashPass = async (req, res, next) => {
    try {
        console.log("Inside hashPass middleware function")
        next()

    } catch (error) {
        res.status(501).json({ errorMessage: error.message, error: error })
    }
}

const comparePass = async (req, res, next) => {
    try {
        console.log(req.body)
        let findUser = await User.findOne({where: {username: req.body.username}})

        console.log(password)
    } catch (error) {
        res.status(501).json({message: error.message, error: error})
    }
}

module.exports = {
    hashPass
}