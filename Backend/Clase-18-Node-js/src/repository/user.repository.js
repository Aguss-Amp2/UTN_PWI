import User from "../models/user.model.js"
import { ServerError } from "../utils/error.utils.js"


class UserRepository {
    async create({username, email, password, veritfication_token}){
        try{
            await User.create({username, email, password, veritfication_token})
        }
        catch(error){
            if(error.code === 11000){
                if(error.keyPattern.username){
                    throw new ServerError('Username aready registered', 400)
                }
                if(error.keyPattern.email){
                    throw new ServerError('Email aready registered', 400)
                }
            }
            throw error
        }
    }
}

export default new UserRepository