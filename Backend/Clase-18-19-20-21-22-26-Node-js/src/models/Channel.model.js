import mongoose from "mongoose"

const channel_schema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        workspace: {type: mongoose.Schema.Types.ObjectId, ref: 'Workspace', required: true},
        created_at: {type: Date, default: Date.now},
        created_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
    }
)

const Channel = mongoose.model('Channel', channel_schema)

export default Channel