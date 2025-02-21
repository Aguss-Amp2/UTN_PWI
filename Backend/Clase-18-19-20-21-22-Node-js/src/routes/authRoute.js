import express from 'express'
import registerUsers, { loginController, resetPasswordController, rewritePasswordController, verifyEmailController } from '../controllers/auth.controller.js'

const authRoute = express.Router()

authRoute.post('/register', registerUsers)
authRoute.get('/verify-email', verifyEmailController)
authRoute.post('/login', loginController)
authRoute.post('/reset-password', resetPasswordController)
authRoute.put("/rewrite-password", rewritePasswordController)

export default authRoute