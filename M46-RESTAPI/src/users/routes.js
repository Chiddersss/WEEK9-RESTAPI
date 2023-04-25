const { Router } = require('express');

const userRouter = Router()

const { registerUser, getAllUsers, updateUser, deleteUser} = require('./controllers')
const { hashPass } = require("../middleware")


userRouter.post("/users/register", hashPass, registerUser)

userRouter.get("/users/getAllUsers", getAllUsers)

userRouter.put("/users/updateUser", updateUser)

userRouter.delete("/users/deleteUser", deleteUser)

//TODO: add the rest of routes for each controller

module.exports = userRouter