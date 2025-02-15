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

    async verifyUserByEmail (email){
        const user_found = await User.findOne({[USER_PROPS.EMAIL]: email})
        if(!user_found){
            throw new ServerError('User not found', 404)
        }
        if(user_found.verified){
            throw new ServerError('User has already been verified', 400)
        }
        user_found.verified = true
        await user_found.save()
        return user_found
    }

    async findUserByEmail (email){
        const user_found = await User.findOne({[USER_PROPS.EMAIL]: email})
        return user_found
    }
}

export default new UserRepository