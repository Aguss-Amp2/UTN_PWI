import express from 'express'
import registerUsers from '../controllers/auth.controller.js'

const authRoute = express.Router()

authRoute.post('/register', registerUsers)

export default authRoute