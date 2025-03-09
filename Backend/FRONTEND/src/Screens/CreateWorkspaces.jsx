import React from "react"
import './global.css'
import { useNavigate } from "react-router-dom"
import { useForm } from "../hooks/useForm"
import { useApiRequest } from "../hooks/useApiRequest"
import { ENVIROMENT } from "../config/enviroment"

const CreateWorkspaceScreen = () => {
    const navigate = useNavigate()
    const initialFormState = {
        workspaces: '',
        channel: ''
    }
    
    const {formState, handleChangeInput} = useForm(initialFormState)
    const {responseApiState, postRequest} = useApiRequest(ENVIROMENT.URL_API + '/api/workspaces')
    
    const handleSumbitForm = async (event) => {
        event.preventDefault()
        if (formState.workspaces && formState.channel) {
            await postRequest(formState)
            // navigate('/channel')
        } else {
            alert("Por favor, ingresa ambos campos.")
        }
    }


    return (
        <div className="father">
            <form onSubmit={handleSumbitForm} className="box-workspaces">
                <h1 className="create-h1">Create Workspaces</h1>
                <div>
                        <label htmlFor="workspaces" className="label-workspaces">Name Workspaces : </label>
                        <input type="text" id="workspaces" name="workspaces" placeholder="UTN-TN-MAR-JUEV" value={formState.workspaces} onChange={handleChangeInput}/>
                </div>
                <div>
                        <label htmlFor="channel" className="label-workspaces">Name Channel : </label>
                        <input type="text" id="channel" name="channel" placeholder="Tarea alumnos" value={formState.channel} onChange={handleChangeInput}/>
                </div>
                {responseApiState.error && <span style={{color: 'red'}}>{responseApiState.error}</span>}
                {
                    responseApiState.loading
                        ? <span>Se creo con Exito</span>
                        : <div className="btn-box">
                            <button type="sumbit">Enter Workspaces</button>
                        </div>
                }
            </form>
        </div>
    )
}

export default CreateWorkspaceScreen