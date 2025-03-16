import dotenv from 'dotenv'

// Carga las variables de entorno en process.env
dotenv.config()

const ENVIROMENT = {
    PORT: process.env.PORT,
    MONGO_DB_URL: process.env.MONGO_DB_URL,
    SECRET_KEY_JWT: process.env.SECRET_KEY_JWT,
    GMAIL_USERNAME: process.env.GMAIL_USERNAME,
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
    URL_BACKEND: process.env.URL_BACKEND,
    URL_FRONTEND: process.env.URL_FRONTEND,
    MYSQL: {
        DB_NAME: process.env.MY_SQL_DATABASE,
        USERNAME: process.env.MY_SQL_USER,
        HOST: process.env.MY_SQL_HOST,
        PASSWORD: process.env.MY_SQL_PASSWORD
    }
}

for(let key in ENVIROMENT){
    if(ENVIROMENT[key] === undefined){
        console.error('OJO la variable ' + key + ' esta indefinida')
    }
}

export default ENVIROMENT