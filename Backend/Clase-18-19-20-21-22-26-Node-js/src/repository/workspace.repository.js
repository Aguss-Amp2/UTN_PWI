import Workspace from "../models/Workspace.model.js";
import { ServerError } from "../utils/error.utils.js";

class WorkspaceRepository {
    async findWorkspaceById(id){
        return await Workspace.findById(id)
    }

    async createWorkspace({name, owner_id}){
        const workspace = await Workspace.create(
            {
                name,
                owner: owner_id,
                members: [owner_id]
            }
        )
        return workspace
    }

    async addNewMember({workspace_id, owner_id, invited_id}){
        const workspace_found = await this.findWorkspaceById(workspace_id)

        //Que exista el Workspace
        if(!workspace_found){
            throw new ServerError('Workspace Not Found', 404)
        }
        //Que sea el dueño
        if(!workspace_found.owner.equals(owner_id)){
            throw new ServerError('You are not the owner of this Workspace', 403)
        }
        //que el initado ya no sea el dueño
        if(workspace_found.members.includes(invited_id)){
            throw new ServerError('Is already a member', 400)
        }

        workspace_found.members.push(invited_id)
        await workspace_found.save()
        return workspace_found
    }
}

const workspaceRepository = new WorkspaceRepository()

export default workspaceRepository