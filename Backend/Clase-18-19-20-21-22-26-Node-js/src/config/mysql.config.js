import mysql from 'mysql2'
import ENVIROMENT from './enviroment.config.js'

const pool = mysql.createPool ({
    host: ENVIROMENT.MYSQL.HOST,
    user: ENVIROMENT.MYSQL.USERNAME,
    password: ENVIROMENT.MYSQL.PASSWORD,
    database: ENVIROMENT.MYSQL.DB_NAME
})

const promisePool = pool.promise()

export default promisePool