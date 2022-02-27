'use strict'                     
import Sequelize from "sequelize"
import { createUser } from "./models/create_user.js"
import { listVideo } from "./models/list_video.js"

var db= {}
const sequelize= new Sequelize(
    'short',
    'root',
    '',
    {
        host: 'localhost',
        port: '3306',
        dialect: 'mysql',
        define: {
            freezeTableName: true
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        operatorAliases: false  
    }
)

let models= [
    listVideo,
    createUser
]

models.forEach(model=> {
    const seqModel= model(sequelize, Sequelize)
    db[seqModel.name]= seqModel
})

Object.keys(db).forEach(key=> {
    if('associate' in db[key]) {
        db[key].associate(db)
    }
})

db.sequelize= sequelize
db.Sequelize= Sequelize

export default db