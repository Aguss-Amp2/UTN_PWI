import React from "react"
import './global.css'
import { useNavigate } from "react-router-dom"

const CreateWorkspaceScreen = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/channel')
    }

    return (
        <div className="father">
            <div className="box-workspaces">
                <h1 className="create-h1">Create Workspaces</h1>
                <div>
                        <label htmlFor="workspaces" className="label-workspaces">Name Workspaces : </label>
                        <input type="text" id="workspaces" name="workspaces"/>
                </div>
                <div>
                        <label htmlFor="channel" className="label-workspaces">Name Channel : </label>
                        <input type="text" id="channel" name="channel"/>
                </div>
                <div className="btn-box">
                    <button type="sumbit" onClick={handleClick}>Enter Workspaces</button>
                </div>
            </div>
        </div>
    )
}

export default CreateWorkspaceScreen