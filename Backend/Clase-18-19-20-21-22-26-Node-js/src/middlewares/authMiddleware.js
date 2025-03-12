import jwt from "jsonwebtoken"
import { ServerError } from "../utils/error.utils.js"
import ENVIROMENT from "../config/enviroment.config.js"

export const authMiddleware = (request, response, next) => {
    try{

        const authorization_header = request.headers['authorization']
        console.log('Request User:', request.user); // ¿Viene correctamente del middleware?
        console.log('Request Headers:', request.headers)
        if(!authorization_header){
            throw new ServerError('No se Proporciono el Header de Autorizacion', 401)
        }

        const authorization_token = authorization_header.split(' ')[1]
        if(!authorization_token){
            throw new ServerError('No se Proporciono el Token de Autorizacion', 401)
        }
        try{
            const user_info = jwt.verify(authorization_token, ENVIROMENT.SECRET_KEY_JWT)
            //Clave para despues llamarlo en otra funcion y ver la informacion
            console.log('user_info', user_info)
            if (!user_info || !user_info.id) {
                throw new ServerError('Token inválido', 401);
            }
            request.user = user_info
            next()
        }
        catch(error){
            throw new ServerError('Error al Verificar token',404)
        }


    }
    catch(error){
        console.log('Error al Autorizar', error)

        if(error.status){
            return response.send({
                message: error.message,
                status: error.status,
                ok: false
            })
        }

        return response.send({
            message: 'Internal Server Error',
            status: 500,
            ok: false
        })
    }
}