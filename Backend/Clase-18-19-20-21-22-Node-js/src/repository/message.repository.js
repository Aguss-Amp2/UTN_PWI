import Message from "../models/Message.model.js";
import { ServerError } from "../utils/error.utils.js";
import channelRepository from "./channel.repository.js";
import workspaceRepository from "./workspace.repository.js";

class MessageRepository {
    
    async create({sender_id, channel_id, content}){
        const cahnnel_found = channelRepository.findChannelById(channel_id)

        if(!cahnnel_found){
            throw new ServerError('Channel not found', 404)
        }

        const workspace_found = await workspaceRepository.findWorkspaceById(cahnnel_found.workspace)
        if(!workspace_found.members.includes(sender_id)){
            throw new ServerError('User is not member of this workspace', 403)
        }


        const new_message = await Message.create({
            sender: sender_id,
            channel: channel_id,
            content
        })
        return new_message
    }
}

const messageRepository = new MessageRepository()

export default messageRepository