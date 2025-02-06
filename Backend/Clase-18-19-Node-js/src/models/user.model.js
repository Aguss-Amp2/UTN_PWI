import mongoose from "mongoose"

export const USER_PROPS = {
    EMAIL: 'email',
    PASSWORD: 'password',
    USERNAME: 'username',
    VERIFIED: 'verified',
    VERIFICATION_TOKEN: 'verification_token',
    CREATE_AT: 'create_at',
    MODIFIED_AT: 'modified_at',
    ACTIVE: 'active'
}

const userSchema = new mongoose.Schema(
    {
        [USER_PROPS.EMAIL]: {
            type: String,
            require: true,
            unique: true
        },
        [USER_PROPS.PASSWORD]: {
            type: String,
            require: true
        },
        [USER_PROPS.USERNAME]: {
            type: String,
            require: true,
            unique: true
        },
        [USER_PROPS.VERIFIED]: {
            type: Boolean,
            default: false
        },
        [USER_PROPS.VERIFICATION_TOKEN]: {
            type: String
        },
        [USER_PROPS.CREATE_AT]: {
            type: Date,
            default: Date.now
        },
        [USER_PROPS.MODIFIED_AT]: {
            type: Date
        },
        [USER_PROPS.ACTIVE]: {
            type: Boolean,
            default: true
        }
    }
)

const User = mongoose.model('User', userSchema)

export default User