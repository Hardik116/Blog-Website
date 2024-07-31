const express = require('express');
const router = express.Router();
const blogcontroller = require('../controller/blogcontroller')
const Blog= require('../models/blog')

router.get('/blog',blogcontroller.blog_index);
router.get('/blog/create',blogcontroller.blog_create)
router.get('/blog/:id',blogcontroller.blog_detail)
router.post('/blog',blogcontroller.blog_post)
router.delete('/blogs/:id' ,blogcontroller.blog_delete)

module.exports =  router;