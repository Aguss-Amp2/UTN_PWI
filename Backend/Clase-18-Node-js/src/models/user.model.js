import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            require: true
        },
        username: {
            type: String,
            require: true,
            unique: true
        },
        verified: {
            type: Boolean,
            default: false
        },
        veritfication_token: {
            type: String
        },
        create_at: {
            type: Date,
            default: Date.now
        },
        modified_at: {
            type: Date
        },
        active: {
            type: Boolean,
            default: true
        }
    }
)

const User = mongoose.model('User', userSchema)

export default User