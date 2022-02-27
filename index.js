import express from "express"
import { ApolloServer} from "apollo-server-express"
import { typeDefs, resolvers } from "./graphql/listvideo.js"
import cors from "cors"

const server= new ApolloServer({ typeDefs, resolvers })
const app= express()
app.use(cors())
const initApolloServer= async ()=> {
    await server.start()
    server.applyMiddleware({app})
}
initApolloServer()

app.listen({port: 4000}, ()=> {
    console.log("server run on port 4000")
})