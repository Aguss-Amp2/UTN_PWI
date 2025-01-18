import express from 'express'
import {  getUsersListController, updateUsernameByEmailController } from '../controlers/get.users.list.js'

const usersRouter = express.Router()

usersRouter.get('/', getUsersListController)

// usersRouter.get('/:email', deleteUserByEmailController)

usersRouter.get('/:email', updateUsernameByEmailController)


export default usersRouter