import User, { USER_PROPS } from "../models/user.model.js"
import { ServerError } from "../utils/error.utils.js"


class UserRepository {
    async create({username, email, password, verification_token}){
        try{
            await User.create(
                {
                    [USER_PROPS.USERNAME]: username, 
                    [USER_PROPS.EMAIL]: email, 
                    [USER_PROPS.PASSWORD]: password, 
                    [USER_PROPS.VERIFICATION_TOKEN]:verification_token
                }
            )
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