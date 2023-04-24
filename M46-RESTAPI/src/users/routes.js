const { Router } = require('express');

const userRouter = Router()

const { registerUser } = require('./controllers')

userRouter.post("/users/register", registerUser)

//TODO: add the rest of routes for each controller

module.exports = userRouter