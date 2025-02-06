import ENVIROMENT from "../config/enviroment.config.js"
import UserRepository from "../repository/user.repository.js"
import { ServerError } from "../utils/error.utils.js"
import bcrypt, { hash } from 'bcrypt'
import jwt from 'jsonwebtoken'

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

        //Encriptar contraseña
        const passwordHash = await bcrypt.hash(password, 10)

        // JSON WEB TOKEN que es un JSON pasado a string '{"nombre": "pepe"}' --> 'sddssd.dsds.dsds'

        const verification_token = jwt.sign(
            {email}, //Lo que queremos guardar en el token
            ENVIROMENT.SECRET_KEY_JWT, // Clave con la que vamos a firmar
            {expiresIn: '24h'} // Fecha de expiracion del token
        )

        await UserRepository.create({username, email, password: passwordHash, verification_token: verification_token})
        /*
            Le vamos a mandar un mail al usuario
            El mail va a tener un link
            <a href="http://localhost:3000/api/auth/verifyEmail?verification_token">Click para Verificar</a>
        */
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