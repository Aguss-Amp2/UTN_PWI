const btnRegisterHTML = document.getElementById('btn-register')
const modalHTML = document.querySelector('.modal-container')
const btnCloseModalHTML = document.querySelector('.btn-close')

function openModal(){
    modalHTML.classList.remove('hidden')
}

function closeModal(){
    modalHTML.classList.add('hidden')
}

btnRegisterHTML.addEventListener('click', openModal)
btnCloseModalHTML.addEventListener('click', closeModal)

/*
Evento pasando una funcion anonima CallBack
btnCloseModalHTML.addEventListener('click', function closeModal(){
    modalHTML.classList.add('hidden')
}) */


const teclasTocadas = []

function capturarTecla(Evento){
    // El Evento es un objeto con datos del evento, OJO, este objeto suele cambiar entre distintos tipos de eventos
    console.log('El usuario apreto una Tecla')
    if(Evento.key == 'p'){
        console.log('El juego esta en Pausa')
    }
    teclasTocadas.push(Evento.key)
}
function capturarSalidaTecla(){
    console.log('El usuario salio de una Tecla')
}

document.addEventListener('keydown', capturarTecla)
document.addEventListener('keyup', capturarSalidaTecla)
console.log(teclasTocadas)

const titleHTML =document.querySelector('.title')

titleHTML.oncopy = function(evento){
    evento.preventDefault()
}

const inputHTML = document.querySelector('.input')
const btnVerHTML = document.querySelector('.btn-ver')

btnVerHTML.onclick = function(){
    inputHTML.type = 'text'
}

const formularioHTML = document.getElementById('formulario')

function enviarFormulario(evento){
    // PREVENIR RECARGA DE PAGINA
    evento.preventDefault()

    // El formulario donde se origino el elemento
    const formulario = evento.target

    console.log(formulario.nombre.value)
    
    // LOS FORMULARIOS POR DEFECTO TE RECARGAN LA PAGINA
    console.log('Se envio el Formulario')
}

formularioHTML.addEventListener('submit', enviarFormulario)