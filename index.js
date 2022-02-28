import express from "express"
import { ApolloServer} from "apollo-server-express"
import { typeDefs, resolvers } from "./graphql/index.js"
import cors from "cors"
import { route } from "./route/load_comment.js"


const server= new ApolloServer({ typeDefs, resolvers })
const app= express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true,
    parameterLimit: 10
}))
app.use(route)
const initApolloServer= async ()=> {
    await server.start()
    server.applyMiddleware({app})
}
initApolloServer()

app.listen({port: 4000}, ()=> {
    console.log("server run on port 4000")
})