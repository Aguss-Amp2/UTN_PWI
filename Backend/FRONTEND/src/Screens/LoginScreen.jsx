import React from "react"
import { useApiRequest } from "../hooks/useApiRequest.jsx"
import { useForm } from "../hooks/useForm.jsx"
import { ENVIROMENT } from "../config/enviroment"

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
    <div>
      <h1>Inicia sesion en Nuestra Pagina</h1>
      <form onSubmit={handleSumbitForm}>
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
          : <button>Iniciar Sesion</button>
        }
      </form>
    </div>
  )
}

export default LoginScreen