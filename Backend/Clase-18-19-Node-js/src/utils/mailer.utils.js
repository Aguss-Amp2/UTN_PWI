import nodemailer from 'nodemailer'
import ENVIROMENT from '../config/enviroment.config.js'

const transporte = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: ENVIROMENT.GMAIL_USERNAME,
        pass: ENVIROMENT.GMAIL_PASSWORD
    },
    tls: {rejectUnauthorized: false}
})

export const sendMail = async({to, subject, html}) => {
    const response = await transporte.sendMail({
        to,
        subject,
        html
    })
    console.log(response)
}