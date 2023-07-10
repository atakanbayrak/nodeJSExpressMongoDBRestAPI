const express = require('express')
const { getPosts, createPosts, getDetail, getUpdate, deletePosts, searchPost} = require('../controllers/post.js')
const auth = require('../middleware/auth.js')
const router = express.Router()

//crud operations
router.get('/searchPost',searchPost)
router.get('/getPosts', getPosts)
router.post('/createPosts',auth, createPosts)
router.get('/getDetail/:id', getDetail)
router.patch('/getUpdate/:id',auth, getUpdate)
router.delete('/deletePost/:id',auth, deletePosts)
//

module.exports = router