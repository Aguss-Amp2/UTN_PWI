import mongoose from "mongoose"
import User from "../models/User.model.js"
import Workspace from "../models/Workspace.model.js"
import workspaceRepository from "../repository/workspace.repository.js"
import { compare } from "bcrypt"
import userRepository from "../repository/user.repository.js"

export const createWorkspaceController = async(req, res) => {
    try{
        const {name} = req.body
        const owner_id = req.user.id
        const new_workspace = await workspaceRepository.createWorkspace({name, owner_id})
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

export const getWorkspaceName = async (req, res) => {
    try {
        const { workspace_id } = req.params; // Obtener workspace_id desde la URL
        const workspace = await Workspace.findById(workspace_id); // Buscar el workspace en la DB

        if (!workspace) {
            return res.status(404).json({ message: 'Workspace no encontrado' });
        }

        return res.status(200).json({ name: workspace.name }); // Enviar el nombre del workspace
    } catch (error) {
        console.error("Error al obtener el nombre del workspace:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
}

export const getWorkspacesController = async (req, res) => {
    try {
        // Obtener el id del usuario autenticado desde el middleware
        const user_id = req.user.id

        // Obtener los workspaces asociados al usuario desde el repositorio
        const workspaces = await workspaceRepository.getWorkspacesByUserId(user_id)

        // Si no hay workspaces asociados
        if (!workspaces || workspaces.length === 0) {
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
            data: workspaces
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

export const getUserIdByEmail = async (req, res) => {
    const { email } = req.params; // Recibimos el email como un parámetro en la URL

    try {
        // Buscamos al usuario en la base de datos por su correo electrónico
        const user = await User.findOne({ email });

        // Si no se encuentra al usuario, respondemos con un error
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Respondemos con el id del usuario
        return res.status(200).json({ id: user._id });
    } catch (error) {
        // En caso de error, respondemos con un error
        console.error(error);
        return res.status(500).json({ message: 'Error al obtener el id del usuario' });
    }
}

export const getWorkspaceMembers = async (req, res) => {
    const { workspace_id } = req.params;

    // Verificar si el workspace_id es un ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(workspace_id)) {
        return res.status(400).json({ message: 'ID de workspace no válido' });
    }

    try {
        // Buscar el workspace en la base de datos
        const workspace = await Workspace.findById(workspace_id).populate('members');

        if (!workspace) {
            return res.status(404).json({ message: 'Workspace no encontrado' });
        }

        // Si el workspace existe, devolver los miembros
        const members = workspace.members;

        res.status(200).json({
            success: true,
            members
        });
    } catch (error) {
        console.error('Error al obtener los miembros del workspace:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

export const getProfile = async (req, res) => {
    const email = req.params.email; // Obtener el email desde la URL

    console.log('Email from Params:', email); // Debug

    try {
        // Buscar al usuario en la base de datos usando el email
        const user = await User.findOne({ email });

        if (!user) {
            console.log('Usuario no encontrado en la base de datos');
            return res.status(404).json({ message: 'Usuario no existe' });
        }

        return res.status(200).json({
            email: user.email,
            username: user.username,
        });
    } catch (error) {
        console.error('Error al obtener el perfil:', error);
        return res.status(500).json({ message: 'Error al obtener el perfil' });
    }
}