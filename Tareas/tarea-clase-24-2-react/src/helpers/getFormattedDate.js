// Obtiene la fecha actual en formato 'min:horas: dias/meses'
const getFormattedDateMMHHDDMM = () => {
    // Crear un objeto Date con la fecha actual
    const fecha_actual = new Date()
    const hora = fecha_actual.getHours().toString().padStart(2, '0'); // Hora con dos dígitos
    const minutos = fecha_actual.getMinutes().toString().padStart(2, '0'); // Hora con dos dígitos

    return `${hora}:${minutos}`
}

export default getFormattedDateMMHHDDMM