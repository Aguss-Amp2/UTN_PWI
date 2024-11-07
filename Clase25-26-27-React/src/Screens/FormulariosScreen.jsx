import React, { useState } from "react";
import extractFormData from "../helpers/extractFormData";
import getFormattedDateMMHHDDMM from "../helpers/getFormattedTime";

const FormulariosScreen = () => {
    // Creamos un estado de usuario, Empieza como array vacio
    const [usuarios, setUsuarios] = useState([])
    const [errors, setErrors] = useState({nombre: null, contrasenia: null})

    // Pregunta tecnica: Si yo hago un push (osea agrego un elemento al array) que pasaria? Se imprime en pantalla

    // Queres controlar los inputs o preferis esperar a que lo envie el usuario

    // No controlar gasta menos recursos
    const handleSumbitUncontrolledForm = (evento) => {
        evento.preventDefault() // Ya no recarga mi pagina

        // El evento es un objeto con datos del evento en particular
        // El target de un evento es el elemento HTML que emitio dicho evento
        const form_jsx = evento.target

        const nuevo_usuario = extractFormData(form_jsx) // {nombre, contraseña}

        let hayErrores = false
        if(!nuevo_usuario.nombre){
            setErrors((prevStateErrors) => {
                return{...prevStateErrors, nombre: 'Falta un Nombre'}})
            hayErrores = true
        }
        if(!nuevo_usuario.contrasenia){
            setErrors((prevStateErrors) => {
                return {...prevStateErrors, contrasenia: 'Falta una Contraseña'}})
            hayErrores = true
        }

        if(!hayErrores){
            setErrors({nombre: null, contrasenia: null})
            nuevo_usuario.hora_creacion = getFormattedDateMMHHDDMM()

            // Agregar a mi estado el nuevo usuario
            // Esto esta MAL: usuarios.push(nuevo_usuario)
            // Esto seria mejor
            setUsuarios([...usuarios, nuevo_usuario])
        }

    }
    console.log(usuarios)

    return(
        <div>
            <h1>Formulario en React</h1>
            <form onSubmit={handleSumbitUncontrolledForm}>
                <label htmlFor="nombre">Ingrese su Nombre</label>
                <br/>
                <input type="nombre" id="nombre" name="nombre"/>
                {errors.nombre && <span>{errors.nombre}</span>}

                <br/>
                <label htmlFor="contraseña">Ingrese su Contraseña</label>
                <br/>
                <input type="password" id="password" name="contrasenia"/>
                {errors.contrasenia && <span>{errors.contrasenia}</span>}
                <button type="sumbit">Confirmar</button>
            </form>
            <UsersList users={usuarios}/>
        </div>
    )
}

const UsersList = ({users}) => {
    return(
        <div>
            {
                users.map(user => {
                    return <UserCard nombre={user.nombre} contrasenia={user.contrasenia}/>
                })
            }
        </div>
    )
}

const UserCard = ({nombre, contrasenia}) => {
    return(
        <div>
            <h2>Nombre: {nombre}</h2>
            <h2>Contraseña: {contrasenia}</h2>
        </div>
    )
}

export default FormulariosScreen