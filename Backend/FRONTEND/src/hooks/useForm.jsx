import { useState } from "react"

export const useForm = (formInitialState) => {
    const [formState, setFormState] = useState(formInitialState)

    const handleChangeInput = (event) => {
        //Objetivo: Modiicar el estado del formulario a medida se vaya ejecutando el evento change en los distintos inputs

        const { name, value } = event.target

        setFormState((prevFormState) => {
            return { ...prevFormState, [name]: value }
        })
        // Esto esta mal formState[event.target.name] = event.target.value
    }

    return {formState, handleChangeInput}
}