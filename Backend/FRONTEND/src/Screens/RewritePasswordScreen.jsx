import React, { useEffect } from 'react'
import './css/mediaScrenn.css'
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

    const initialFormState = {
        password: '',
        reset_token
    }

    const { formState, handleChangeInput } = useForm(initialFormState)
    const { responseApiState, putRequest } = useApiRequest(ENVIROMENT.URL_API + '/api/auth/rewrite-password')

    const [isLoading, setIsLoading] = useState(false)
    const [showSpinner, setShowSpinner] = useState(false)

    useEffect(() => {
        if (isLoading) {
            setShowSpinner(true)
            const timer = setTimeout(() => {
                setShowSpinner(false)
            }, 2000)

            return () => clearTimeout(timer)
        }
    }, [isLoading])

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
        setIsLoading(true)

        await new Promise(resolve => setTimeout(resolve, 2000))

        await putRequest({ password: formState.password, reset_token })
        setIsLoading(false)
    }

    return (
        <div className="father">
            <div className="content">
                <h1>Cambiar Contraseña</h1>
                <form className="options form" onSubmit={handleSubmitForm}>
                    <div>
                        <label htmlFor="password" className="label-login-email-password">Nueva Contraseña: </label>
                        <input className="screnns" type="text" id="password" name="password" value={formState.password} onChange={handleChangeInput}/>
                    </div>
                    {
                        responseApiState.loading 
                        ?   <div className="spinner" role="status" aria-label="Cargando" aria-live="polite">
                                <span className="visually-hidden"></span>
                            </div>
                        :( responseApiState.data
                            ? <span className="span-resp">Enviado</span>
                            : <button type='submit'>Listo</button>
                        )
                    }
                </form>
            </div>
        </div>
    )
}

export default RewritePassword