import express from 'express'
import authRouter from './routes/auth.router.js'
import usersRouter from './routes/users.router.js'
import products_router from './routes/products.router.js'

const PORT = 3000
const app = express()

app.use(express.json())

app.use('/api/auth', authRouter)

/*
Crear una nueva route
/api/users

GET /api/users Devuelve toda la lista de usuarios (No mostear las contraseñas)
DELETE /api/users/:email Eliminar el usuario por email
PUT /api/users/:email 
    body: username 
    modificara el username de ese usuario
*/
app.use('/api/users', usersRouter)

/*
Route: /api/products

GET /api/products
Devolver todos los productos
Res:{
    message: 'Productos Obtenidos'
    ok: true
    status: 200
    payload: {
        products: [{productos}]
    }
}

GET /api/products/:product_id
Buscar un producto por id

Si se encontro:
Res:{
    message: 'Productos con ID {id_buscado} encontrado'
    ok: true
    status: 200
    payload: {
        products: [{producto_encontrado}]
    }
}

Si no se encontro:
Res:{
    message: 'Productos con ID {id_buscado} no encontrado'
    ok: faslse
    status: 404
}

POST /api/products
Crear un nuevo producto (el id se debe autogenerar y debe ser autoincremental)
Body: {
    title: string,
    description: string,
    price: number,
    stock: number
} 
Response: {
    message: "Producto creado",
    ok: true,
    status: 201,
    payload: {
        product: {producto_creado}
    }
}

DELETE /api/products/:product_id
Eliminar un producto por id
Response: {
    message: "Producto con id {id_buscado} eliminado",
    ok: true,
    status: 200
}
*/

app.use('/api/products', products_router)


app.listen(PORT, ()=>{
    console.log(`El servidor esta ejecutandose en http://localhost:${PORT}`)
})