import mongoose from "mongoose";
import Channel from "../models/Channel.model.js"
import { ServerError } from "../utils/error.utils.js"
import workspaceRepository from "./workspace.repository.js"

class ChannelRepository {
    async findChannelById (channel_id){
        console.log('Buscando canal con ID:', channel_id)
        if (!mongoose.Types.ObjectId.isValid(channel_id)) {
            throw new ServerError('Invalid Channel ID format', 400);
        }
        const channel = await Channel.findById(channel_id).populate('workspace')
        console.log('Canal despues del FindId:', channel)

        if (!channel) {
            throw new ServerError('Channel not found', 404);
        }
        return channel
    }

    async createChannel({name , workspace_id , user_id}){
        const workspace_found = await workspaceRepository.findWorkspaceById(workspace_id)
        if(!workspace_found){
            throw new ServerError('Workspace not found', 404)
        }
        if(!workspace_found.members.includes(user_id)){
            throw new ServerError('You are not member of this workspace', 403)
        }
        
        const channel = await Channel.create(
            {
                name,
                workspace: workspace_id,
                created_by: user_id
            }
        )
        return channel
    }
}

const channelRepository = new ChannelRepository()
export default channelRepository