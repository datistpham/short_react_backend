import connection from "../setup_database/mysql/index.js"

const like_comment= async (req, res)=> {
    const { data, id_comment, comment }= req.query
    await connection.execute(`update ${comment} set like_=${data} where id_comment='${id_comment}' `)
}

export { like_comment }