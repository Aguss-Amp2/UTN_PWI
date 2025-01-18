import express from 'express'
import {  deleteUserByEmailController, getUsersListController, updateUsernameByEmailController } from '../controlers/get.users.list.js'

const usersRouter = express.Router()

usersRouter.get('/', getUsersListController)

usersRouter.delete('/:email', deleteUserByEmailController)

usersRouter.put('/:email', updateUsernameByEmailController)


export default usersRouter