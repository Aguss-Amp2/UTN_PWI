import mongoose from "mongoose"

const message_schema = new mongoose.Schema(
    {
        channel: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Channel'
        },
        sender: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User'
        },
        content: {
            type: String, 
            required: true
        },
        created_at: {
            type: Date, default: Date.now
        }
    }
)

const Message = mongoose.model('Message', message_schema)

export default Message