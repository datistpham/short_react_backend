import connection from "../setup_database/mysql/index.js"

const count_comment= async (req, res)=> {
    const id_comment = req.query.id_comment
    const [rows]= await connection.execute(`select count (name_comment) from ${id_comment}`)
    res.send(rows[0])

}

export { count_comment }