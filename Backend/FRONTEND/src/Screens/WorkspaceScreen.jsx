import React from "react"
import './global.css'
import { useNavigate } from "react-router-dom"

const WorkspaceScreen = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/create-workspaces')
    }

    return (
        <div className="father">
            <div className="box-workspaces">
                <h1>Workspaces de : mail</h1>
                <button>Worspaces</button>

                <div className="btn-box">
                    <button type="sumbit" onClick={handleClick}>Create Workspaces</button>
                </div>
            </div>
        </div>
    )
}

export default WorkspaceScreen