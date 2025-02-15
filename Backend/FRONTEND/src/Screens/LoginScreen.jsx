import React from "react"
import { useApiRequest } from "../hooks/useApiRequest.jsx"
import { useForm } from "../hooks/useForm.jsx"
import { ENVIROMENT } from "../config/enviroment.js"
import './global.css'

const LoginScreen = () => {
  const initialFormState = {
    email: '',
    password: ''
  }

  const {formState, handleChangeInput} = useForm(initialFormState)
  const {responseApiState, postRequest} = useApiRequest(ENVIROMENT.URL_API + '/api/auth/login')
  const handleSumbitForm = async(body) =>{
    body.preventDefault()
    await postRequest(formState)
  }

  return (
    <div className="father">
      <div className="content">
        <h1>Inicio de sesion</h1>
        <form onSubmit={handleSumbitForm} className="options">
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="joedoe@gmail.com" value={formState.email} onChange={handleChangeInput}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="text" id="password" name="password" value={formState.password} onChange={handleChangeInput}/>
          </div>
          {responseApiState.error && <span style={{color: 'red'}}>{responseApiState.error}</span>}
          {
            responseApiState.loading 
            ? <span>Cargando</span>
            : <button type="submit">Iniciar Sesion</button>
          }
          <a className="a-password" href="http://localhost:5173/reset-password">Olvide mi Contraseña</a>
        </form>
      </div>
    </div>
  )
}

export default LoginScreen