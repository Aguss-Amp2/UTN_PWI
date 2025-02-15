import ENVIROMENT from "./config/enviroment.config.js"
import express from 'express'
import authRoute from "./routes/authRoute.js"
import mongoose from "./config/mongoDB.config.js"
import cors from 'cors'

const app = express()

//Deshabilito la politica de cors
//Si quieren un backend publico
app.use(cors())

/* Si no quieren un backend publico
app.use(cors(
    {
        origin: ENVIROMENT.URL_FRONTEND
    }
))*/

app.use(express.json())

app.use('/api/auth', authRoute)


app.listen (ENVIROMENT.PORT, () => {
    console.log(`El servidor se esta ejecutando en el el Puerto http://localhost:${ENVIROMENT.PORT}`)
})