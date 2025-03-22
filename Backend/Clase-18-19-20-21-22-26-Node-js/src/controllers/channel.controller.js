import Workspace from "../models/Workspace.model.js"
import channelRepository from "../repository/channel.repository.js"
import messageRepository from "../repository/message.repository.js"

export const createChannelController = async(req, res) => {
    try{
        //Channel Name
        const { name } = req.body
        //Workspaces al que quiero añadir este channel
        const { workspace_id } = req.params
        //id del usuario que quiere crear el canal
        const user_id = req.user.id
        const new_channel = await channelRepository.createChannel({name, user_id, workspace_id})
        res.json({
            ok: true,
            status: 201,
            message: 'Channel Created',
            data: {
                new_channel
            }
        })

    }
    catch(error){
        console.log('Error Channel ', error)

        if(error.status){
            return res.status(400).send({
                message: error.message,
                status: error.status,
                ok: false
            })
        }

        return res.send({
            message: 'Server internal Error',
            status: 500,
            ok: false
        })
    }
}

export const sendMessageToChannelController = async(req, res) =>{
    try{
        const {channel_id} = req.params
        const user_id = req.user.id
        const {content} = req.body

        const new_message = await messageRepository.create({sender_id: user_id, channel_id, content})
        res.json({
            ok: true,
            status: 201,
            message: 'Message Created',
            data: {
                new_message
            }
        })

    }
    catch(error){
        console.log('Error al enviar mensaje al canal ', error)

        if(error.status){
            return res.status(400).send({
                message: error.message,
                status: error.status,
                ok: false
            })
        }

        return res.send({
            message: 'Server internal Error',
            status: 500,
            ok: false
        })
    }
}

export const getMessagesListFromChannelController = async (req, res) =>{
    try{
        const user_id = req.user.id
        const {channel_id} = req.params
        const messages = await messageRepository.findMessagesFromChannel({channel_id, user_id})
        res.json({
            ok: true,
            message: 'Messages found',
            status: 200,
            data: {
                messages
            }
        })

    }
    catch(error){
        console.log("error al obtener la lista de mensajes", error);

        if (error.status) {
            return res.status(400).send({
                ok: false,
                status: error.status,
                message: error.message
            });
        }

        res.status(500).send({
            status: 500,
            ok: false,
            message: "internal server error"
        });
    }
} 

export const getChannelController = async (req, res) => {
    try {
        // Obtener el id del usuario autenticado desde el middleware
        const user_id = req.user.id
        const workspace_id= req.params.workspace_id

        // Verificar si se proporcionó un workspaceId
        if (!workspace_id) {
            return res.status(400).json({
                ok: false,
                message: 'Workspace ID is required',
                data: []
            });
        }

        // Obtener los workspaces asociados al usuario desde el repositorio
        const channel = await channelRepository.getChannelsByWorkspaceId(workspace_id, user_id)

        // Si no hay workspaces asociados
        if (!channel || channel.length === 0) {
            return res.status(404).json({
                ok: false,
                message: "No workspaces found for this user",
                data: []
            });
        }

        // Si hay workspaces, devolverlos
        return res.status(200).json({
            ok: true,
            message: "Workspaces retrieved successfully",
            data: channel
        });
    } catch (error) {
        console.log('Error fetching workspaces:', error);

        return res.status(500).json({
            ok: false,
            message: 'Server internal error',
            status: 500
        })
    }
}