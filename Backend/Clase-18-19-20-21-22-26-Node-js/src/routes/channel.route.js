import { Router } from "express"
import { authMiddleware } from "../middlewares/authMiddleware.js"
import { createChannelController, getMessagesListFromChannelController, sendMessageToChannelController } from "../controllers/channel.controller.js"

const channelRouter = Router()

//Crear canal
// Body{name: 'general'}
//Headers: Authorization: Bearer token
//Checkear que el usuario que quiera agregar un canal que este incluido como miembro en el Workspace
channelRouter.post('/:workspace_id', authMiddleware, createChannelController)

//Enviar mensajes
channelRouter.post('/:channel_id/messages', authMiddleware, sendMessageToChannelController)

channelRouter.get('/:channel_id/messages', authMiddleware, getMessagesListFromChannelController)
export default channelRouter