const contenedorHTML = document.getElementById('contenedor')
const btnOcultarHTML = document.getElementById('btn-ocultar')

// Cunado le demos click al boton de acoultar, debemos ocultar el div conenedor

// DECLARACION
// function mostrarMensaje(){
//     console.log('Has ocultado algo')
// }

// INVOCAR
// mostrarMensaje()

function ocultarCartel(){
    // El metodo toggle nos permite interpolar una clase
    // Si la clase esta, LA SACA, sino, LA PONE
    contenedorHTML.classList.toggle('hidden')
}


// Hay tres formas de manejar eventos en JS:

// MALA PRACTICA
// Asignar la funcion al elemento HTML como atributo 
// <button id="btn-ocultar" onclick="mostrarMensaje()">Ocultar</button>



// Referenciar
// const variableRara = mostrarMensaje
// variableRara()

// Esto es mejor PRACTICA
// LLamar al boton y asignarle la funcion a la propiedad onClick
// btnOcultarHTML.onclick = mostrarMensaje


// Esto es Mejor PRACTICA
// Llamar al boton y usar el metodo addEventListener para darle el evento y la funcionalidad
btnOcultarHTML.addEventListener('click', ocultarCartel)

const btnVerMas = document.getElementById('btn-ver-mas')
const textoHTML = document.getElementById('texto-oculto')

function verMas(){
    let estaOculto = textoHTML.classList.contains('hidden')
    btnVerMas.innerText = estaOculto ? 'Ver Menos' : 'Ver Mas'
    textoHTML.classList.toggle('hidden')
}

btnVerMas.addEventListener('click', verMas)
