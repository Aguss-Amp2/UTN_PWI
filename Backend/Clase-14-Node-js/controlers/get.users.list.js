import { deleteUser } from "../repository/delete.user.repository.js"
import { listUsers } from "../repository/list.users.repository.js"
import { update } from "../repository/update.username.js"

export const getUsersListController = async (req, res) => {
    try{
        const usersList = await listUsers()
        console.log(usersList)
        return res.send({
            ok: true
        })
    }
    catch(error){
        console.log('Error al Mostrar la lista: ', error)
        return res.send({
            ok: false,
            message: 'Internal server error',
            status: 500
        })
    }
}

export const deleteUserByEmailController = async (req, res) => {
    try{
        const { email } = req.params
        const usersList = await deleteUser({email})
        console.log(usersList)
        return res.send({
            ok: true,
            message: 'Delete User'
        })
    }
    catch(error){
        console.log('Error al Eliminar: ', error)
        return res.send({
            ok: false,
            message: 'Internal server error',
            status: 500
        })
    }
}

export const updateUsernameByEmailController = async (req, res) => {
    try{
        const { email } = req.params
        const { newUsername } = req.body
        const usernameUpdate = await update(email, newUsername)
        console.log(usernameUpdate)
        return res.send({
            ok: true,
            message: 'Update Successfully!'
        })
    }
    catch(error){
        console.log('Error al Cambiar Usuario: ', error)
        return res.send({
            ok: false,
            message: 'Internal server error',
            status: 500
        })
    }
}