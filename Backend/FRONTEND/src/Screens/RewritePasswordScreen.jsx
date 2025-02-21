import React, { useEffect } from 'react'
import './global.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useForm } from '../hooks/useForm'
import { useApiRequest } from '../hooks/useApiRequest'
import { ENVIROMENT } from '../config/enviroment'

const RewritePassword = () => {
    const navigate = useNavigate()
    /* Forma con react router dom */
    const [searchParams] = useSearchParams(window.location.search)
    const reset_token = searchParams.get('reset_token')
    useEffect(
        ()=>{
            
            if(!reset_token) {
                navigate('/login')
            }
        },
        []
    )

    
    /* 
	Forma nativa
    useEffect(
        ()=>{
            const searchParams = new URLSearchParams(window.location.search)
            const reset_token = searchParams.get('reset_token')
            if(!reset_token) {
                navigate('/login')
                }
                },
                []
                ) */

    const initialFormState = {
        password: '',
        reset_token
    }

    const { formState, handleChangeInput } = useForm(initialFormState)
    const { responseApiState, putRequest } = useApiRequest(ENVIROMENT.URL_API + '/api/auth/rewrite-password')

    useEffect(
        () => {
            if (responseApiState.data) {
                navigate('/login')
            }
        },
        [responseApiState]
    )
    const handleSubmitForm = async (e) => {
        e.preventDefault()
        //                 Nueva pass                    Reset_token
        await putRequest({ password: formState.password, reset_token })
    }

    return (
        <div className="father">
            <div className="content">
                <h1>Cambie su Contraseña</h1>
                <form className="options" onSubmit={handleSubmitForm}>
                    <div>
                        <label htmlFor="password">Nueva Contraseña</label>
                        <input type="text" id="password" name="password" value={formState.password} onChange={handleChangeInput}/>
                    </div>
                    {
                        responseApiState.loading 
                        ? <span>Cargando</span>
                        :( responseApiState.data
                            ? <span>Enviado</span>
                            : <button type='submit'>Establecer Nueva Contraseña</button>
                        )
                    }
                </form>
            </div>
        </div>
    )
}

export default RewritePassword