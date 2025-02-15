import React from "react"
import './global.css'
import { ENVIROMENT } from "../config/enviroment.js"
import { useForm } from "../hooks/useForm.jsx"
import { useApiRequest } from "../hooks/useApiRequest.jsx"

const RegisterScreen = () => {
    const formInitialState = {
        username: '',
        email: '',
        password: ''
    }

    const {formState, handleChangeInput} = useForm(formInitialState)

    const {responseApiState, postRequest} = useApiRequest(ENVIROMENT.URL_API + '/api/auth/register')

    const handleSumbitForm = async (event) => {
        event.preventDefault()
        await postRequest(formState)
    }

    return (
        <div className="father">
            <div className="content">
                <h1>Registrate the App</h1>
                <form onSubmit={handleSumbitForm} className="options">
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input 
                        placeholder="Joe Doe" 
                        type="text" 
                        id="username" 
                        name="username"
                        value={formState.username} 
                        onChange={handleChangeInput}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input 
                        placeholder="JoeDoe@gmail.com" 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formState.email} 
                        onChange={handleChangeInput}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input 
                        placeholder="Joe1234" 
                        type="text" 
                        id="password" 
                        name="password"
                        value={formState.password} 
                        onChange={handleChangeInput}/>
                    </div>
                    {
                        responseApiState.error 
                        && <span style={{color: 'red'}}>{responseApiState.error}</span>
                    }
                    {
                        responseApiState.loading
                        ? <span>Cargando</span>
                        : <button type="submit">Register</button>
                    }
                </form>
            </div>
        </div>
    )
}

export default RegisterScreen