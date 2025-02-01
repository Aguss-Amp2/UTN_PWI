import UserRepository from "../repository/user.repository.js"
import { ServerError } from "../utils/error.utils.js"

const registerUsers = async(req, res) => {
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

        await UserRepository.create({username, email, password, veritfication_token: 'test'})

        console.log(req.body)
        return res.send({
            message: 'User register',
            status: 201,
            ok: true
        })
    }
    catch(error){
        console.log('Error al Registrar ', error)

        if(error.status){
            return res.send({
                message: error.message,
                status: error.status,
                ok: false
            })
        }

        return res.send({
            message: 'User No register',
            status: 404,
            ok: false
        })
    }
}

export default registerUsers