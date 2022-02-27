import mysql from "mysql2/promise"
import bluebird from "bluebird"

const connection= mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'short',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    Promise: bluebird
})


export default connection