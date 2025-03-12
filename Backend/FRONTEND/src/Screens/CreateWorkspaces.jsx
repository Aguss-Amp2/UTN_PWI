import React from "react"
import './global.css'
import { useNavigate } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import { useApiRequest } from "../hooks/useApiRequest"
import { ENVIROMENT } from "../config/enviroment"

const CreateWorkspaceScreen = () => {
    const navigate = useNavigate()
    const initialFormState = {
        name: '',
        email: ''
    }
    
    const {formState, handleChangeInput} = useForm(initialFormState)
    const {responseApiState, postJwtRequest} = useApiRequest(ENVIROMENT.URL_API + '/api/workspaces', ENVIROMENT.URL_API + '/api/workspaces/:workspace_id/invite/:invited_id')
    
    const token = sessionStorage.getItem('authorization_token')

    const handleClick = () => {
        navigate('/channel')
    }
    const handleSumbitForm = async (event) => {
        event.preventDefault()
        
        if (formState.name && formState.email) {
            await postJwtRequest(formState, token)
        }
        else {
            console.log('Error ingrese los dos campos')
        }
    }


    return (
        <div className="father">
            <form onSubmit={handleSumbitForm} className="box-workspaces">
                <h1 className="create-h1">Create Workspaces</h1>
                <div>
                        <label htmlFor="workspaces" className="label-workspaces">Name Workspaces : </label>
                        <input type="text" id="name" name="name" placeholder="UTN-TN-MAR-JUEV" value={formState.name} onChange={handleChangeInput}/>
                </div>
                <div>
                        <label htmlFor="email" className="label-workspaces">Email User : </label>
                        <input type="email" id="email" name="email" placeholder="jose123@gmail.com" value={formState.email} onChange={handleChangeInput}/>
                </div>
                {responseApiState.error && <span style={{color: 'red'}}>{responseApiState.error}</span>}
                {
                    responseApiState.loading
                        ? <span>Cargando...</span>
                        : <div className="btn-box">
                            <button type="sumbit">Create Workspaces</button>
                        </div>
                }
            </form>
        </div>
    )
}

export default CreateWorkspaceScreen