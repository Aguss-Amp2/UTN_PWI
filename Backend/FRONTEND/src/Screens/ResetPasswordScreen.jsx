import React from 'react'
import './global.css'
import { useForm } from '../hooks/useForm.jsx'
import { useApiRequest } from '../hooks/useApiRequest.jsx'
import { ENVIROMENT } from '../config/enviroment.js'

const ResetPassword = () => {
    const initialFormState = {
        email: ''
    }

    const { formState, handleChangeInput } = useForm(initialFormState)
    const { responseApiState, postRequest } = useApiRequest(ENVIROMENT.URL_API + '/api/auth/reset-password')
    const handleSumbitForm = async (body) => {
        body.preventDefault()
        await postRequest(formState)
    }

    return (
        <div className="father">
            <div className="content">
                <h1>Ingrese su Email</h1>
                <form className="options" onSubmit={handleSumbitForm}>
                    <div>
                        <label htmlFor="email" className="label-login-email-password">Email :</label>
                        <input type="email" id="email" name="email" value={formState.email} onChange={handleChangeInput}/>
                    </div>
                    {
                        responseApiState.error && <span style={{color: 'red'}}>{responseApiState.error}</span>
                    }
                    {
                        responseApiState.loading ? (
                            <span>Cargando</span>
                        ) : responseApiState.data ? (
                            <span>Ya se le mando el link a su Mail</span>
                        ) : (
                            <button type='submit'>Enviar</button>
                        )
                    }
                </form>
            </div>
        </div>
    )
}

export default ResetPassword