import channelRepository from "../repository/channel.repository.js"
import messageRepository from "../repository/message.repository.js"

export const createChannelController = async(req, res) => {
    try{
        //Channel Name
        const { name } = req.body
        //Workspaces al que quiero añadir este channel
        const { workspace_id } = req.params
        //id del usuario que quiere crear el canal
        const user_id = req.user?.id
        console.log(user_id)
        const new_channel = await channelRepository.createChannel({name, user_id, workspace_id})

        console.log(name)
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

export const sendMessageToChannelController = async(res, req) =>{
    try{
        const {channel_id} = req.params
        const user_id = req.user.id
        const {content} = req.body

        const new_message = messageRepository.create({sender_id: user_id, channel_id, content})

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