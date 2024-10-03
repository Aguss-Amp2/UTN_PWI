let productos = [
    {
        titulo: 'Coca Cola',
        precio: 1000,
        descripcion: 'bebida energetica',
        stock: 10,
        id: 1
    },
    {
        titulo: 'Sprite',
        precio: 1200,
        descripcion: 'bebida energetica sabor limon',
        stock: 5,
        id: 2
    },
    {
        titulo: 'Fanta',
        precio: 1400,
        descripcion: 'bebida energetica sabor naranja',
        stock: 7,
        id: 3
    },
    {
        titulo: 'Pepsi',
        precio: 900,
        descripcion: 'bebida energetica',
        stock: 4,
        id: 4
    }
]

//hacer una funcion que dado un id me permita obtener un producto por su id y mostrarlo por consola

//Esto es una JSDocs
/**
**   producto_id any parameter es el id del producto a buscar
**   producto obj var es el producto que estoy recorriendo de mi lista de productos
**   productos array var es la lista de productos
** Una funcion que recibe el id del producto, lo busca y lo retorna, sino lo encuentra devolvera undefined
*/

const productos_especiales = [
    {
        titulo: 'Tv Samsung',
        precio: 1400,
        descripcion: 'Televisor samsung',
        stock: 10,
        id: 1
    },
    {
        titulo: 'Tv LG',
        precio: 1200,
        descripcion: 'Televisor LG',
        stock: 4,
        id: 2
    }
]

function obtenerProductoPorId(producto_id, lista_productos){
    // Logica para buscar en la lista del producto id
    // recorrer el array con un for of
    for(let producto of lista_productos){
        if(producto.id === producto_id){
            return producto
        }
    }
}
// Como hago para que mi funcion sea compatible con los productos especiales con los productos
console.log(obtenerProductoPorId(2, productos_especiales))
console.log(obtenerProductoPorId(2, productos))

// Una funcion que me permita obtener a todos los productos que su precio sea mayor a 1100
// Esta funcion retornara un Array, que estara conpuesto de los elementos que cumplan la condicion de tener un precio mayor a 1100

// function obtenerProductoMayoresA(precio){
//     // Esta es la lista donde se guardaran aquellos productos que cumplan la condicion
//     let array_resultado = []

//     for(let producto of productos){
//         if(producto.precio > precio){
//             array_resultado.push(producto)
//         }
//     }
//     return array_resultado
// }

// let productosCaros = obtenerProductoMayoresA(950)

// console.log(productosCaros)

// Ahora hace una funcion que me devuelva a productos que esten entre 100 y 200

// function obtenerProductoEntre100Y200(){
//     let array_producto = []
//     for(let producto of productos){
//         if(producto.precio >= 100 && producto.precio <= 200){
//             array_producto.push(producto)
//         }
//     }
// }

// Crear una funcion que me permita dado el id, retornar su posicion del elemento array y si no lo encuentra debe devolver -1

// obtenerPosicionDelProductoPorId(2) //retorna 1
// obtenerPosicionDelProductoPorId(20) //retorna -1
// Recomendacion veer que bucle conviene usar

// function obtenerPosicionDelProductoPorId(id){
//     for(let i = 0; i < productos.length; i++){
//         if(productos[i].id === id){
//             return i
//         }
//     }
//     return -1
// }

//Una funcion que se llame hayAlgunProductoConXTitulo que recibira un titulo y nos devolvera true si algun producto tiene ese titulo o false si ninguno lo tiene

// function obtenerTitulo(titulo){
//     for(let producto of productos){
//         if(producto.titulo === titulo){
//             return true
//         }
//     }
//     return false
// }

// console.log(obtenerTitulo('Sprite'))

// const nombres = ['pepe','maria','juan']

// for(let i = 0; i < nombres.length; i++){
//     console.log(i)
//     console.log(nombres[i])
// }


