import { createUser } from "../repository/user.repository.js"
import { ServerError } from "../utils/errors.util.js"


export const registerControler = async (req, res)=>{
    try{
        const {username, email, password} = req.body
        if(!username){
            throw new ServerError('Username is required', 400)
        }
        if(!email){
            throw new ServerError('Email is required', 400)
        }
        if(!password){
            throw new ServerError('Password is required', 400)
        }
        const users = await createUser({username, email, password})
        console.log(users)
        res.send({
            ok: true
        })
    }
    catch(error){
        console.log('Error al Registrar: ', error)
        if(error.status){
            return res.send({
                ok: false,
                message: error.message,
                status: error.status
            })
        }
        return res.send({
            ok: false,
            message: 'Internal server error',
            status: 500
        })
    }
}