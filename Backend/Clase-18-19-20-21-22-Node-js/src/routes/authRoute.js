import express from 'express'
import registerUsers, { loginController, resetPasswordController, verifyEmailController } from '../controllers/auth.controller.js'

const authRoute = express.Router()

authRoute.post('/register', registerUsers)
authRoute.get('/verify-email', verifyEmailController)
authRoute.post('/login', loginController)
authRoute.post('/reset-password', resetPasswordController)

export default authRoute