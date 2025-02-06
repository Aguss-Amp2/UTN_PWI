import ENVIROMENT from "./config/enviroment.config.js"
import express from 'express'
import authRoute from "./routes/authRoute.js"
import mongoose from "./config/mongoDB.config.js"
import { sendMail } from "./utils/mailer.utils.js"

const app = express()
app.use(express.json())

/*Crear una Ruta llamda /api/auth
POST /register
body {
    username
    email
    password
}

response {
    message: 'User register',
    status: 201,
    ok: true
}
*/

app.use('/api/auth', authRoute)


app.listen (ENVIROMENT.PORT, () => {
    console.log(`El servidor se esta ejecutando en el el Puerto http://localhost:${ENVIROMENT.PORT}`)
})

sendMail({
    to: 'utnprueba3@gmail.com',
    subject: 'Probando nodemailer',
    html: '<h1>Hola desde JS</h1>'
})