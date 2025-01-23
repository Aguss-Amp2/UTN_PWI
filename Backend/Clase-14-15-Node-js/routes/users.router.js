import express from 'express'
import {  deleteUserByEmailController, getAllUsersController, updateUsernameByEmailController } from '../controlers/get.users.list.js'

const usersRouter = express.Router()

usersRouter.get('/', getAllUsersController)

usersRouter.delete('/:email', deleteUserByEmailController)

usersRouter.put('/:email', updateUsernameByEmailController)


export default usersRouter