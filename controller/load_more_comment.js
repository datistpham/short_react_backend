import connection from "../setup_database/mysql/index.js"

const loadmorecomment= async (req, res)=> {
    const id_comment = req.query.id_comment
    const minvalue= req.query.minvalue
    const id_increment= req.query.id
    if(id_increment!= -1 || minvalue != Infinity ) {
        
        const [rows] = await connection.execute(`select * from ${id_comment} where (like_ <= ${minvalue} and id != ${id_increment}) order by like_ desc limit 5`)
        res.send(rows)
    }
    else {
        return res.send([])
    }


}

export { loadmorecomment }