const express = require('express')
const { getPosts, createPosts, getDetail, getUpdate, deletePosts } = require('../controllers/post.js')

const router = express.Router()

//crud operations
router.get('/getPosts', getPosts)
router.post('/createPosts', createPosts)
router.get('/getDetail/:id', getDetail)
router.patch('/getUpdate/:id', getUpdate)
router.delete('/deletePost/:id', deletePosts)

module.exports = router