import express from 'express'
import {commentPost,getPost,getPosts, createPost, updatePost, deletePost, likePost, getPostBySearch} from '../controllers/posts.js'
import {auth} from "../middleware/auth.js"
const router = express.Router()
// - /posts/..
router.get('/', getPosts)
router.get('/search', getPostBySearch)
router.get('/:id', getPost)

router.post('/', auth,createPost)
router.post('/:id/commentPost',auth,commentPost)

router.patch('/:id', auth, updatePost)
router.delete("/:id", auth, deletePost)
router.patch('/:id/likePost', auth,likePost)



export default router 