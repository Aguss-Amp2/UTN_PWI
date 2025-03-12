import { useState } from "react"
import { ServerError } from "../utils/error.util.js"

export const useApiRequest = (url) => {
    //Nos conviene guardar en el hook ,porque no es algo q va a variar entre los componentes
    const initialResponseApiState = {
        loading: false,
        error: null,
        data: null
    }

    
    const [responseApiState, setResponseApiState] = useState(initialResponseApiState)
    
    const postRequest = async (body) => {
        try{
            setResponseApiState((prevState) => {
                return {...prevState, loading: true}
            })
            //Enviar formulario (osea el estado) del backend
            //Consulta HTTP
            //Fetch nos permite hacer consiltas HTTP
            //Recibe la URL a consultar y un objeto de configuracion
            //URL: STRING
            //Objeto: objetc {method, header, body(solo si la consulta no es GET)}
            const response = await fetch(
                url,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                }
            )

            const data = await response.json()
    
            if(data.ok){
                setResponseApiState((prevState) =>{
                    return {...prevState, data: data}
                })
            }
            else{
                throw new ServerError(data.message, data.status)
            }
        }
        catch(error){
            setResponseApiState((prevState) => {
                if(error.status){//Verificmos si es un error de servidor
                    return {...prevState, error: error.message}
                }
                return {...prevState, error: 'No se pudo enviar la informacion al servidor'}
            })
        }
        finally{
            setResponseApiState((prevState) => {
                return {...prevState, loading: false}
            })
        }
    }

    const postJwtRequest = async (body, token) => {
        try{
            setResponseApiState((prevState) => {
                return {...prevState, loading: true}
            })
            const response = await fetch(
                url,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify(body)
                }
            )

            const data = await response.json()
    
            if(data.ok){
                setResponseApiState((prevState) =>{
                    return {...prevState, data: data}
                })
            }
            else{
                throw new ServerError(data.message, data.status)
            }
        }
        catch(error){
            setResponseApiState((prevState) => {
                if(error.status){//Verificmos si es un error de servidor
                    return {...prevState, error: error.message}
                }
                return {...prevState, error: 'No se pudo enviar la informacion al servidor'}
            })
        }
        finally{
            setResponseApiState((prevState) => {
                return {...prevState, loading: false}
            })
        }
    }

    const putRequest = async (body) => {
        try{
            setResponseApiState({...initialResponseApiState, loading: true})
                
            const response = await fetch(
                url,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                }
            )

            const data = await response.json()
            console.log(data)
    
            if(data.ok){
                setResponseApiState((prevState) =>{
                    return {...prevState, data: data}
                })
            }
            else{
                throw new ServerError(data.message, data.status)
            }
        }
        catch(error){
            setResponseApiState((prevState) => {
                if(error.status){//Verificmos si es un error de servidor
                    return {...prevState, error: error.message}
                }
                return {...prevState, error: 'No se pudo enviar la informacion al servidor'}
            })
        }
        finally{
            setResponseApiState((prevState) => {
                return {...prevState, loading: false}
            })
        }
    }

    return {responseApiState, postRequest, putRequest, postJwtRequest}
}