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

function eliminarProductoPorId (id_producto){
    let posicionProductoEliminar
    // Logica para eliminar un producto

    // Problema saber la posicion del elemento a eliminar
    // tenemos que buscar la posicion del producto que su id sea igual al id recibido

    // Estructura para recorrer el array
    for(let i = 0; i < productos.length; i++){
        /* 
        TIPADO: 
            posicion(i): number, es la posicion que estoy recorriendo de mi array
            productos.length: number, es la longitud del array (cantidad de elementos)
            productos: array, lista de productos
            producto: objeto, producto
            id_producto: number, el id recibido de la funcion
            posicionProductoEliminar: number, la posicion del producto que queria eliminar
        */
        let producto = productos[i]
        if(producto.id === id_producto){
            posicionProductoEliminar = i
        }
    }

    // Que metodo usamos para eliminar puntualmente un elemento? splice
    // splice(posicion, cant. eliminar, agregar)
    productos.splice(posicionProductoEliminar, 1)
}

eliminarProductoPorId(2)
console.log(productos)