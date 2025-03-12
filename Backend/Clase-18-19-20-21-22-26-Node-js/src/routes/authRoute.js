import express from 'express'
import registerUsers, { loginController, resetPasswordController, rewritePasswordController, verifyEmailController } from '../controllers/auth.controller.js'
import { createWorkspaceController } from '../controllers/workspace.controller.js'
import { createChannelController } from '../controllers/channel.controller.js'

const authRoute = express.Router()

authRoute.post('/register', registerUsers)
authRoute.get('/verify-email', verifyEmailController)
authRoute.post('/login', loginController)
authRoute.post('/reset-password', resetPasswordController)
authRoute.put('/rewrite-password', rewritePasswordController)
authRoute.post('/workspaces', createWorkspaceController)

export default authRoute