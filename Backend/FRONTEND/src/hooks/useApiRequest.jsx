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

    const getListWorkspaces = async () => {
        try{
            setResponseApiState({...initialResponseApiState, loading: true})
            const token = sessionStorage.getItem('authorization_token');  // o usa localStorage dependiendo de donde lo guardes

            // Verificar si el token está presente
            if (!token) {
                throw new Error('Token no encontrado, por favor inicie sesión nuevamente.');
            }
            const response = await fetch(
                url,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                }
            )

            const data = await response.json()
    
            if (data.ok && Array.isArray(data.data)) {
                setResponseApiState((prevState) => {
                    return { ...prevState, data: data.data } // Solo asignamos 'data.data'
                });
            } else {
                setResponseApiState((prevState) => {
                    return { ...prevState, data: [] } // Si no hay workspaces, asignamos un array vacío
                });
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


    const getListChannel = async () => {
        try{
            setResponseApiState({...initialResponseApiState, loading: true})
            const token = sessionStorage.getItem('authorization_token');  // o usa localStorage dependiendo de donde lo guardes

            // Verificar si el token está presente
            if (!token) {
                throw new Error('Token no encontrado, por favor inicie sesión nuevamente.');
            }
            const response = await fetch(
                url,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                }
            )

            const data = await response.json()
    
            if (data.ok && Array.isArray(data.data)) {
                setResponseApiState((prevState) => {
                    return { ...prevState, data: data.data } // Solo asignamos 'data.data'
                });
            } else {
                setResponseApiState((prevState) => {
                    return { ...prevState, data: [] } // Si no hay workspaces, asignamos un array vacío
                });
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
    const getUserIdByEmail = async (invitedEmail, token) => {
        try {
            const response = await fetch(`${url}/api/workspaces/${invitedEmail}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();
                return data.id; // Retorna el ID del usuario
            } else {
                console.error('No se pudo obtener el ID del usuario');
                return null;
            }
        } catch (error) {
            console.error('Hubo un problema al obtener el ID del usuario:', error);
            return null;
        }
    }

    const postInvitedRequest = async (workspace_id, invitedUserId, token) => {
        try {
            const response = await fetch(`${url}/api/workspaces/${workspace_id}/invite/${invitedUserId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ invited_id: invitedUserId, workspace_id }),
            });

            if (response.ok) {
                console.log('Miembro invitado correctamente');
                return true;
            } else {
                const errorData = await response.json();
                console.error('Error al invitar al miembro:', errorData);
                return false;
            }
        } catch (error) {
            console.error('Hubo un problema al enviar la invitación:', error);
            return false;
        }
    }

    
    return {responseApiState, postRequest, putRequest, postJwtRequest, getListWorkspaces, getListChannel, postInvitedRequest, getUserIdByEmail}
}