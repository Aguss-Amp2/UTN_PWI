import express from 'express'
import filesystem from 'fs'

const PORT = 3000

const app = express()

/* 
Antes de consigurar el request, este middleware observara el Cotent-Type Header
Cuando Content-Type sea 'application/json' ahi hara la transformacion del contenido JSON y lo guardara en el body
*/

app.use(express.json())

app.get('/', (request, response)=>{
    response.send('<h1>Holaa</h1>')
})

app.get('/date', (request, response)=>{
    response.send({
        fecha_actual: new Date()
    })
})

app.post('/products', async (request, response)=>{
    const {name, price, color, marca, es_usado} = request.body
    const new_products = {
        name,
        price,
        color,
        marca,
        es_usado

    }
    const products = await guardarProducts(new_products)
    response.send({
        message :'Producto Creado Satisfactoriamente',
        products: products
    })
})

const guardarProducts = async(new_product)=>{
    const products = JSON.parse(await filesystem.promises.readFile('./database/products.json', {encoding: 'utf8'}))
    products.push(new_product)
    await filesystem.promises.writeFile('./database/products.json', JSON.stringify(products), {encoding: 'utf8'})
    return products
}



app.post('/register', async (request, response)=>{
    const {email, password} = request.body
    const new_user = {email, password}
    const users = await guargarUser(new_user)
    response.send({
        message:'Usuario Registrado',
        Users: users
    })
})

const guargarUser = async(new_user) => {
    const users = JSON.parse(await filesystem.promises.readFile('./database/usuarios.json', {encoding: 'utf8'}))
    users.push(new_user)
    await filesystem.promises.writeFile('./database/usuarios.json', JSON.stringify(users), {encoding: 'utf8'})
    return users
}

/*
HTTP Methods
GET --> Obtener un recurso del servidor (No tiene body)
POST --> Crear un recurso en el servidor
PUT --> Actualixar un recurso ya existente en el servidor
DELETE --> Eliminar un recurso del servidor
*/


app.listen(PORT, ()=>{
    console.log(`La aplicacion se esta ecuchando en el puerto ${PORT}`)
})