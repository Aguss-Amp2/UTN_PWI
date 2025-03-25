import React from 'react'
import './css/mediaScrenn.css'
import { useForm } from '../hooks/useForm.jsx'
import { useApiRequest } from '../hooks/useApiRequest.jsx'
import { ENVIROMENT } from '../config/enviroment.js'

const ResetPassword = () => {
    const initialFormState = {
        email: ''
    }

    const { formState, handleChangeInput } = useForm(initialFormState)
    const { responseApiState, postRequest } = useApiRequest(ENVIROMENT.URL_API + '/api/auth/reset-password')
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

    const handleSumbitForm = async (body) => {
        body.preventDefault()
        setIsLoading(true)

        await new Promise(resolve => setTimeout(resolve, 2000))

        await postRequest(formState)
        setIsLoading(false)
    }

    return (
        <div className="father">
            <div className="content">
                <h1>Ingrese su Email</h1>
                <form className="options form" onSubmit={handleSumbitForm}>
                    <div>
                        <label htmlFor="email" className="label-login-email-password">Email :</label>
                        <input className="screnns" type="email" id="email" name="email" value={formState.email} onChange={handleChangeInput}/>
                    </div>
                    {
                        responseApiState.error && <span style={{color: 'red'}}>{responseApiState.error}</span>
                    }
                    {
                        responseApiState.loading || isLoading ? (
                            <div className="spinner" role="status" aria-label="Cargando" aria-live="polite">
                                <span className="visually-hidden"></span>
                            </div>
                        ) : responseApiState.data ? (
                            <span className="span-resp">Ya se le mando el link a su Mail</span>
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