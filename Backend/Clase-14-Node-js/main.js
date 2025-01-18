import express from 'express'
import authRouter from './routes/auth.router.js'
import usersRouter from './routes/users.router.js'

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


app.listen(PORT, ()=>{
    console.log(`El servidor esta ejecutandose en http://localhost:${PORT}`)
})