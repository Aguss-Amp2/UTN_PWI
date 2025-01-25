import express from 'express'   
import { registerControler } from '../controlers/auth.controler.js'

const authRouter = express.Router()

authRouter.post('/register', registerControler)

authRouter.post('/login', (req, res)=>{
    try{
        return res.send({
            message: 'Logged succesfully'
        })
    }
    catch(error){
        console.log('Error login: ', error)
        return res.send({
            ok: false,
            message: 'Internal server error',
            status: 500
        })
    }
})

export default authRouter