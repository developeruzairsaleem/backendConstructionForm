const express = require('express');
const { getAllUsers, postUser } = require('./user.controller');


const userRouter = express.Router();

userRouter.get('/users', getAllUsers)
userRouter.post('/users', postUser)


module.exports =userRouter;