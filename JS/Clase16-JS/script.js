// Objetos
let nombreUsuario = 'pepe'
let apelllidoUsuario = 'suarez'
let edadUsuario = 19

// let propiedadNueva = prompt('ingrese una nueva propidad al objeto')
// let valorNuevo = prompt('Ingrese el nuevo valor')

// Objeto Literal
let usuario = {
    'nombre': nombreUsuario, 
    'apellido': 'suarez', 
    edad: 19, 
    'esCliente': false,
    "direccion": {
        'pais': 'AR',
        provincia: 'Buenos Aires'
    },
    divisa: 'USD',
    // [propiedadNueva]: valorNuevo
}
// Creando la propiedad dinero X Mala Practica
usuario.dinero = 40000
// O usuario['dinero'] = 40000

// Cambiar propiedades
usuario.esCliente = true

// Eliminar Propiedades X Mala practica (las func o cod de su obj fallara si eliminamos propiedades utiles)
delete usuario.divisa

console.log(usuario )

// Declaracion
function presentarUsuario (persona){
    console.log(`Hola me llamo ${persona.nombre} mi apellido es ${persona.apellido} y tengo ${persona.edad}.`)
}

presentarUsuario(usuario)

// let propiedadMostrar = prompt('Ingrese la clave que quiere mostrar')
// alert(usuario[propiedadMostrar])
// Si hacemos esto
// alert(usuario.propiedadMostrar)
// JS entiende esto
// usuario['propiedadMostrar']



// Crear el Objeto producto que tenga titulo, precio, id, stock, vendedor

let producto = {
    'titulo': 'Leche Serenisima',
    'precio': 1230,
    'id': 1253,
    'stock': 46,
    'vendedor':{
        'nombre': 'Casa del Audio',
        'id': 1
    }
}

// Notaciones de corchetes
console.log(producto['precio'])
console.log(producto['vendedor']['id'])

// Notacion de puntos
console.log(producto.titulo)
// Consideracion de la notacion de puntos
// No usar espacios ni -, *, /, %, +, ,
// En vez de usar _, & o camelCase

/* 
EJERCICIO 1:
Crear una funcion llamada producto
la funcion recibira titutlo, precio y categoria del producto
INICIALMENTE EL PRODUCTO TENDRA stock en 0 y la propiedad estado en false
la funcion debera devolver el producto creado y luego para verificar que este correcto deberas mostrarlo en la consola
*/

function crearProducto(titulo, precio, categoria){
    let product = {
        name: titulo,
        price: precio,
        cat: categoria,
        stock: 0,
        estado: false
    }
    return product
}

console.log(crearProducto('TV Samsung', 120000, 'Tecnologia'))
let produto1 = crearProducto('TV Samsung', 120000, 'Tecnologia')
let produto2 = crearProducto('Lavadora', 1345000, 'Tecnologia')

/*
EJERCICIO 2:
Crear una funcion llamada mostrarProducto, la funcion recibira el producto previamente creado y contruira un string con el siguiente formato

`
<div>
    <h3>producto.nombre</h3>
    <span><b>Precio:</b>$producto.precio</span>
    <span><b>Categoria:</b>$producto.categoria</span>
</div>
`
Luego dicho string debera pasarse a la funcion document.write()
Ejemplo:
let HTML = `<div></div>`
document.write(HTML)
*/

function mostrarProducto(product){

    let HTML =`
    <div>
        <h3>${product.name}</h3>
        <span><b>Precio:</b>${product.price}</span>
        <span><b>Categoria:</b>${product.cat}</span>
    </div>
    `

    document.write(HTML)
}

mostrarProducto(produto1)
mostrarProducto(produto2)