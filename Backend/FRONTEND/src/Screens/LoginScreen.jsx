import React, { useContext, useEffect, useState } from "react"
import { useApiRequest } from "../hooks/useApiRequest.jsx"
import { useForm } from "../hooks/useForm.jsx"
import { ENVIROMENT } from "../config/enviroment.js"
import './css/mediaScrenn.css'
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../Context/AuthContext.jsx"

const LoginScreen = () => {
  const navigate = useNavigate()

  const {login} = useContext(AuthContext)
  const initialFormState = {
    email: '',
    password: ''
  }

  const {formState, handleChangeInput} = useForm(initialFormState)
  const {responseApiState, postRequest} = useApiRequest(ENVIROMENT.URL_API + '/api/auth/login')
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
      if(responseApiState.data){
        login(responseApiState.data.data.authorization_token)
        sessionStorage.setItem("email", formState.email)
        navigate('/workspaces')
      }
    },
    //Cada ves q cambio mi estado de respuesta ejecutare el efecto
    [responseApiState, login, navigate]
  )

  const handleClick = () => {
    navigate('/register')
}

  const handleSumbitForm = async (event) => {
    event.preventDefault();
    setIsLoading(true)

    await new Promise(resolve => setTimeout(resolve, 2000))

    await postRequest(formState);

    setIsLoading(false)
  }

  return (
    <div className="father">
      <div className="content">
        <h1>Inicio de sesion</h1>
        <form onSubmit={handleSumbitForm} className="options form">
          <div>
            <label htmlFor="email" className="label-login-email-password">Email :</label>
            <input className="screnns" type="email" id="email" name="email" placeholder="joedoe@gmail.com" value={formState.email} onChange={handleChangeInput}/>
          </div>
          <div>
            <label htmlFor="password" className="label-login-email-password">Contraseña :</label>
            <input className="screnns" type="password" id="password" name="password" value={formState.password} onChange={handleChangeInput}/>
          </div>
          {responseApiState.error && <span style={{color: 'red'}}>{responseApiState.error}</span>}
          <div className="cont-regis-login">
          {
              responseApiState.loading || isLoading
                ? <div className="spinner" role="status" aria-label="Cargando" aria-live="polite">
                    <span className="visually-hidden"></span>
                  </div>
                : <button type="submit">Iniciar Sesion</button>
            }
            {
              !isLoading && (
                <button onClick={handleClick}>Registrate</button>
              )
            }
          </div>
          <Link className="a-password" to="http://localhost:5173/reset-password">Olvide mi Contraseña</Link>
        </form>
      </div>
    </div>
  )
}

export default LoginScreen