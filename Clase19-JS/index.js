// DOM: Document Object Model
// El objeto DOM contiene replica exacta como objeto con tosdos los datos de nuestro HTML
// Si el objeto es modificado, el HTML tambien se ve modificado

// Este es el objeto DOM
// Es una variable global creada al cargarse el script
console.dir(document)

// document.getElementById() Nos permite buscar un elemento en el HTML en particular por ID

// function traerNombreUsuario(){
//     return 'pepe'
// }

// let tituloHTML = document.getElementById('Titulo')
// let nombre = traerNombreUsuario()

// tituloHTML.innerText = 'Bienvenido ' + nombre
// tituloHTML.style.fontSize = '90px'
// tituloHTML.style.color = 'red'
/*
Crear un HTML un soan que tenga un id que sea 'resultado'
Solicitar al usuario 2 numeros y sumarlos (pueden usar promts)
Mostrar en el span: 'El resultado de sumar {num1} y {num2} es {resultado}'
*/

// let num1 = prompt('Ingrese un Numero:')
// let num2 = prompt('Ingrese otro Numero:')
// let resultado = Number(num1) + Number(num2)
// // Si llamo a algo que no existe me devolvera null

// let textoHTML = document.getElementById('resultado')
// textoHTML.innerText = 'El resultado de sumar '+ num1 +' y '+ num2 +' es '+ resultado

// let contenedorHTML = document.getElementById('contenedor')

// let producto = {
//     nombre: 'TV Samsung',
//     precio: 400,
//     stock: 4
// }

// let contenido = `
//     <h2>${producto.nombre}</h2>
//     <span>Precio: $${producto.precio}</span><br>
//     <span>Unidades Disponibles ${producto.stock}</span>
//     <button>Comprar</button>
//     <hr>
// `
// contenedorHTML.innerHTML = contenido


// let user_info = {
//     nombre: 'Agustin Amposta',
//     avatar: 'direccion',
//     mail: 'agustinampo80@gmail.com',
//     ultima_conexion: '20:20 (hora local)'
// }

// const user_info_HTML = document.getElementById('user_info')
// user_info_HTML.innerHTML = `
//     <div class= "user_info_header">
//         <img src="https://ca.slack-edge.com/T07EJ2FLZ2R-U07EQ1QMU4D-42a3dea57862-192" srcset="https://ca.slack-edge.com/T07EJ2FLZ2R-U07EQ1QMU4D-42a3dea57862-512 2x" class="c-base_icon c-base_icon--image" aria-hidden="true" role="img" alt="" style="width: 102px;">
//         <h2>${user_info.nombre}</h2>
//     </div>
//     <div>
//         <span>Email: ${user_info.mail}</span><br>
//         <span>Ultima Conexion: ${user_info.ultima_conexion  }</span>
//     </div>
// `

const products = [
    {
        nombre: 'TV Samsung 32',
        precio: 300,
        stock: 4,
        comprado: true
    },
    {
        nombre: 'TV Samsung 43',
        precio: 400,
        stock: 0,
        comprado: false
    },
    {
        nombre: 'TV Samsung 50',
        precio: 600,
        stock: 40,
        comprado: true
    },
    {
        nombre: 'TV Samsung 100',
        precio: 10000,
        stock: 0,
        comprado: false
    }
]
const productsContainerHTML = document.getElementById('products-container')
// Por cada producto del array del producto deberas crear un div y deberas guardarlo/acumularlo en el resultado

let resultado = ''
for(const producto of products){

    // Si el producto cuesta mas que 5000 vamos a decir que el producto es caro
    let productoCaro = producto.precio > 5000

    // Si el producto esta comprado, entonces debera decir comprado en vez de comprar el boton. Caso contrario, seguira mostrando comprar
    let productoComprado = producto.comprado === true

    // Si el stock es 0 decir 'Ya no quedan Unidades Disponibles' si es mayor a 0 decir 'Unidades Disponibles: 0'
    let unidadesDisponibles = producto.stock === 0


    // Operador ternario: es una forma de hacer condiciones en JS
    // Sintaxis: condiciion ? caso_verdadero : caso_falso
    /*
    let dia = 'martes'
    let esMartes = dia === 'martes'
    // Si es martes, decir 'odio ese dia' sino decir 'por suerte hoy no es martes'
    console.log(esMartes ? 'odio este dia' : 'Por suerte hoy no es Martes')
    */

    resultado += `<div>
    <h2>${producto.nombre}</h2>
    <span>Precio: $${producto.precio}</span><br>
    ${
        unidadesDisponibles ? '<span>Ya no quedan Unidades Disponibles</span><br>' : `<span>Unidades Disponibles ${producto.stock}</span><br>`
    }
    ${
        productoCaro ? '<span>El Producto es Caro</span>' : ''
    }
    ${
        productoComprado ? '<button>Comprar</button>' : '<button>Comprado</button>'
    }
    <hr>
</div>
`
}

productsContainerHTML.innerHTML= resultado