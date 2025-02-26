import ENVIROMENT from "../config/enviroment.config.js"
import UserRepository from "../repository/user.repository.js"
import { ServerError } from "../utils/error.utils.js"
import bcrypt, { hash } from 'bcrypt'
import jwt from 'jsonwebtoken'
import { sendMail } from "../utils/mailer.utils.js"
import User from "../models/User.model.js"
import userRepository from "../repository/user.repository.js"

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

        await sendMail({
            to: email,
            subject: 'Valida tu mail',
            html:`
                <h1>Valida tu mail entra en nuestra pagina</h1>
                <p>Esta validacion es para asegurarnos que tu mailes realmente tuyo, sino te has registrado en (nombre de la empresa) estonces ignora este mail</p>
                <a href='${ENVIROMENT.URL_BACKEND}/api/auth/verify-email?verification_token=${verification_token}'>Verificar cuenta</a>
            `
        })
        
        console.log(req.body)
        return res.status(201).send({
            message: 'User register',
            status: 201,
            ok: true
        })
    }
    catch(error){
        console.log('Error al Registrar ', error)

        if(error.status){
            return res.status(400).send({
                message: error.message,
                status: error.status,
                ok: false
            })
        }

        return res.status(500).send({
            message: 'Internal server Error',
            status: 500,
            ok: false
        })
    }
}

export const verifyEmailController = async(req, res) =>{
    try{
        const {verification_token} = req.query
        const payload = jwt.verify(verification_token, ENVIROMENT.SECRET_KEY_JWT)
        const {email} = payload
        const user_found = await UserRepository.verifyUserByEmail(email)
        res.redirect(ENVIROMENT.URL_FRONTEND + '/login')
    }
    catch(error){
        console.log('Error al Verificar: ', error)

        if(error.status){
            return res.send({
                message: error.message,
                status: error.status,
                ok: false
            })
        }

        return res.send({
            message: 'User No verification',
            status: 404,
            ok: false
        })
    }
}

export const loginController = async (req, res) => {
    try{
        const {email, password} = req.body
        const user_found = await UserRepository.findUserByEmail(email)
        if(!user_found){
            throw new ServerError('User not found', 404)
        }
        if(!user_found.verified){
            throw new ServerError('User found has no valided his email', 400)
        }

        const isSamePassword = await bcrypt.compare(password, user_found.password)
        if(!isSamePassword){
            throw new ServerError('The password is not correct', 400)
        }

        const authorization_token = jwt.sign(
            {
                id: user_found._id,
                username: user_found.username,
                email: user_found.email
            }, 
            ENVIROMENT.SECRET_KEY_JWT,
            {expiresIn: '2h'}
        )

        return res.json({
            ok: true,
            status: 200,
            message: 'Logged',
            data:{
                authorization_token
            }
        })
    }
    catch(error){
        console.log('Error Logged: ', error)

        if(error.status){
            return res.send({
                message: error.message,
                status: error.status,
                ok: false
            })
        }

        return res.send({
            message: 'User No Logged',
            status: 404,
            ok: false
        })
    }
}

export const resetPasswordController = async(req ,res) => {
    try{
        const {email} = req.body
        const user_found = await userRepository.findUserByEmail(email)
        if(!user_found){
            throw new ServerError('User Not Found', 404)
        }
        if(!user_found.verified){
            throw new ServerError('User email is not Verified', 400)
        }
        const reset_token = jwt.sign({email, _id: user_found._id}, ENVIROMENT.SECRET_KEY_JWT, {expiresIn: '2h'})

        await sendMail({
            to: email,
            subject:'Reset your Password',
            html:`
                <h1>Has Reseteado tu contraseña de no ser tu ignora este mail</h1>
                <a href='${ENVIROMENT.URL_FRONTEND}/rewrite-password?reset_token=${reset_token}'>Click aqui para Resetear</a>
                `
        })
        return res.json({
            ok: true,
            status: 200,
            message: 'Reset mail sent'
        })
    }
    catch(error){
        console.log('Error Password: ', error)

        if(error.status){
            return res.send({
                message: error.message,
                status: error.status,
                ok: false
            })
        }

        return res.send({
            message: 'User No Password',
            status: 404,
            ok: false
        })
    }
}

export const rewritePasswordController = async(req ,res) => {
    try {
        const { password, reset_token } = req.body
        const { _id } = jwt.verify(reset_token, ENVIROMENT.SECRET_KEY_JWT)

        // Hashear la pwd
        const newHashedPassword = await bcrypt.hash(password, 10)
        await UserRepository.changeUserPassword(_id, newHashedPassword)
        
        return res.json({
            ok: true,
            message: 'Password changed succesfully',
            status: 200
        })


    } catch (err) {
        console.log(err);
        if (err.status) {
            return res.send({
                ok: false,
                status: err.status,
                message: err.message
            })
        }
        return res.send({
            message: "Internal server error",
            status: 500,
            ok: true
        })
    }
}

export default registerUsers