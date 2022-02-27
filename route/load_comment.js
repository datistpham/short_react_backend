import express from 'express'
import connection from '../setup_database/mysql/index.js'

const route = express.Router()

route.get("/comment", async(req, res) => {
    const id_comment = req.query.id_comment
    const [rows] = await connection.execute(`select * from ${id_comment} order by like_ desc limit 5`)
    res.send(rows)
})

export { route }