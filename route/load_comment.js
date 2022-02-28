import express from 'express'
import { count_comment } from '../controller/count_comment.js'
import { like_comment } from '../controller/like_comment.js'
import { load_comment } from '../controller/load_comment.js'
import { loadmorecomment } from '../controller/load_more_comment.js'

const route = express.Router()

route.get("/comment", load_comment)
route.get("/like_comment", like_comment)
route.get("/comment/l/", loadmorecomment)
route.get("/count/feed_back/comment", count_comment)

export { route }