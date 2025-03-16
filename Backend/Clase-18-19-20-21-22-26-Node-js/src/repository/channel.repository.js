import mongoose, { Types } from "mongoose";
import Channel from "../models/Channel.model.js"
import Workspace from "../models/Workspace.model.js"
import { ServerError } from "../utils/error.utils.js"
import workspaceRepository from "./workspace.repository.js"

class ChannelRepository {
    async findChannelById (channel_id){
        //populate expande workspace y me trae el registro asociado como un subobjeto
        if (!mongoose.Types.ObjectId.isValid(channel_id)) {
            throw new ServerError('Invalid channel ID format', 400);
        }
        return await Channel.findById(channel_id).populate('workspace')
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

    async getChannelsByWorkspaceId (workspace_id, user_id){
        try {
            console.log('Searching for workspace with ID:', workspace_id);
            console.log('userId:', user_id)

            // Verificar si el workspace existe
            const workspace = await Workspace.findById(workspace_id)
            console.log('Workspace found:', workspace)
            if (!workspace) {
                throw new Error('Workspace not found')
            }
            // Asegurarse de que el user_id sea un ObjectId válido
            const userObjectId = new mongoose.Types.ObjectId(user_id);

            const isUserMember = workspace.members.some(member =>
                member.toString() === userObjectId.toString()
            )

            console.log('Is user a member of workspace:', isUserMember);
            // Verifica si el usuario es miembro del workspace
            if (!isUserMember) {
                throw new Error('User is not a member of this workspace');
            }
    
            // Obtener todos los canales que pertenecen al workspace
            const channels = await Channel.find({ workspace: workspace_id })

            console.log('Channels found:', channels)
    
            return channels
        } catch (error) {
            console.error('Error getting channels:', error)
            throw error
        }
    }
}
const channelRepository = new ChannelRepository()
export default channelRepository