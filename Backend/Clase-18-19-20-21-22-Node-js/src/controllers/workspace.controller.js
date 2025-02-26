import workspaceRepository from "../repository/workspace.repository.js"

export const createWorkspaceController = async(req, res) => {
    try{
        const {name} = req.body
        const owner_id = req.user.id
        const new_workspace = await workspaceRepository.createWorkspace({name, owner_id})
        console.log(name)
        res.json({
            ok: true,
            data: 201,
            message: 'Workspace Created',
            data: {
                new_workspace
            }
        })

    }
    catch(error){
        console.log('Error Workspace ', error)

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

export const inviteUserWorkspaceController = async(req, res) => {
    try{
        const user_id = req.user.id
        console.log(req.user.id)
        const {invited_id, workspace_id} = req.params

        const workspace_found = await workspaceRepository.addNewMember({owner_id: user_id, invited_id, workspace_id})
        
        res.json({
            ok: true,
            data: 201,
            message: 'You Member',
            data: {
                workspace: workspace_found
            }
        })

    }
    catch(error){
        console.log('Error Member', error)

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
