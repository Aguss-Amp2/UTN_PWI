// Arrays Metodos y metodos avanzados
// Lista de elementos ordenada
//                0       1       2
let alumnos = ['pepe', 'maria', 'juan']
let notas = [3, 9, 5]

// SINONIMOS: arrays, arreglos, listas, matrices, colecciones, collection, list

// Reasignar un valor en un array
alumnos[1] = 'julian'

// Eliminar propidad X MALA PRACTICA
// delete alumnos[1]

// Creando valorews en pocisiones no existentes X MALA PRACTICA
// alumnos[5] = 'pedrito'

// .length es una propiedad intrinseca de los arrays, significa logitod y nos die cuanto es la cantidad de elementos en la lista

const mails = [
    'pepe@gmail.com',
    'maria@gmail.com',
    'juan@gmail.com',
    'luis@gmail.com',
    'julieta@gmail.com'
]

// Por cada elemnto del array quiero que por consola mdiga , mail enviado a {x direccion}

// mails.length = cantidad de veces que deberemos repetir el mensaje por consola
for(let i = 0; i < mails.length; i++){
    console.log(`Mail enviado a ${mails[i]}`)
}

let producto_vendidos = [
    'teclado',
    'monitor',
    'celular'
]
// Por cada producto vendido deberas mostrar una alerta que diga 'Has vendido {producto exitosamente}

// for(let i = 0; i < producto_vendidos.length; i++){
//     alert(`Has vendido el  ${producto_vendidos[i]} exitosamentez`)
// }

/* Por cada producto vendido vamos a crear un document.write() donde pasamos un string con el siguiente formato
'
<div>
    <h3>{nombre}</h3>
    <hr/>
</div>
'
*/

// FOR OF: se usa para recorrer arrays

// for(let producto of producto_vendidos){
//     document.write(
//         `<div>
//             <h3>Has vendido ${producto} exitosamente </h3>
//             <button>Ver estado de entrega</button>
//             <hr/>
//         </div>`
//     )
// }

let productos = [
    {
        titulo: 'tv samsung 32"',
        precio: 400000,
        id: 1,
        descripcion: 'Es una tv normal, no hay mucho que decir'
    },
    {
        titulo: 'tv samsung 42"',
        precio: 6000000,
        id: 2,
        descripcion: 'Es una tv normal mas grande, no hay mucho que decir'
    },
    {
        titulo: 'tv samsung 72"',
        precio: 8000000,
        id: 3,
        descripcion: 'Es una tv normal pero esta es mucho mas grande, no hay mucho que decir'
    }
]

/*Por cada producto generar un div con la sig estructura:
`
<div>
    <h3>${producto}</h3>
    <p>${descripcion}</p>
    <span>Precio: <b>$${precio}</b></span>
    <button>Comprar</button>
    <hr/>
</div>
`
*/

// METODOS DE ARRAY (acciones asociadas al prototipo de los arrays)

// PUSH: Sirve para agregar elementos alfinal del array
// productos.push(
//     {
//         titulo: 'Nuevo Producto',
//         precio: 10000,
//         id: 4,
//         descripcion: 'lorem ipsum'
//     }
// )

// Sirve para agregar un elemento al principio del array ,corriendo a los demas a una posicion mas
// productos.unshift(
//     {
//         titulo: 'Nuevo Producto',
//         precio: 10000,
//         id: 4,
//         descripcion: 'lorem ipsum'
//     }
// )

// POP: Eliminar el ultimos elemento del array y lo retorna
// let producto_eliminado = producto.pop()
// console.log('Has eliminado a ', producto_eliminado)

// SHIFT: Elimina el primer elemneto del array y lo retorna
// let producto_eliminado = producto.shift()
// console.log('Has eliminado a ', producto_eliminado)

// INDEXOF: Buscar el indice de un elemento del arrays(string), sino encuantra el elemento seria -1

// let nombres = ['Maria','Ragnar','Julian']
// console.log(nombres.indexOf('Ragnar'))
// nombres[nombres.indexOf('Ragnar')] = 'Thor'


// INCLUIDES: Saber si un objeto esta incluido en el arrays(string)

// let carrito = ['empanadas','carne','atun']
// console.log(carrito.includes('carne'))

// let categorias_disponibles = ['tecnologia','hogar','deporte']

// let categoria_solicitada = prompt('Ingrese la categoria del nuevo producto')

// if(categorias_disponibles.includes(categoria_solicitada)){
//     alert('Perfecto')
// }
// else{
//     alert('ERROR: categoria no disponible')
// }


// SPLICE: eliminar, agregar, reemplazar elementos de un array

let nombres = ['Martin','Maria','Ragnar','Julian']
//Aca solo eliminaria a Maria y Raganar pasa a ocupar la posicion de Maria
// nombres.splice(1, 1)

// Agregar a Belen en posicion de Maria
// nombres.splice(1, 0, 'Belen')

// Reemplazar Belen en posicion de Maria
// nombres.splice(nombres.indexOf('Maria'), 1, 'Belen')


for(let producto of productos){
    document.write(
        `
        <div>
            <h3>${producto.titulo}</h3>
            <p>${producto.descripcion}</p>
            <span>Precio: <b>$${producto.precio}</b></span>
            <button>Comprar</button>
            <hr/>
        </div>
        `
    )
}

// let nombre = ['Pepe', 'Adrian', 'Micaela', 'Juan']

// let nuevoNombre = prompt('Ingresa un Nombre')

// nombre.push(nuevoNombre)
// console.log(nombre)