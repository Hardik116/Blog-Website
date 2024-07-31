const Blog = require('../models/blog');
const blog_index =(req,res)=>{
    Blog.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('index',{title:"All Blogs",blogs: result })
    })
    .catch((err)=>{
        console.log(err)
    })
}
const blog_detail =(req,res)=>{
    const id = req.params.id;
    Blog.findById(id)
    .then((result)=>{res.render('detail',{blog:result , title:"Blogs Detail"})})
    .catch((err)=>{
        res.render('404')
    })
}
const blog_delete = (req,res)=>{
        const id = req.params.id;
        Blog.findByIdAndDelete(id)
        .then((result)=>{
            res.json({redirect:'/blog'})
        }).catch(err=>{console.log(err)})
}
const blog_create = (req,res)=>{
        res.render('create');
}
const blog_post = (req,res)=>{
        console.log(req.body)
        const blog = new Blog(req.body);
        blog.save().then(res.redirect('/blog')).catch((err)=>{console.log(err)})
}

module.exports = {blog_index , blog_detail , blog_delete , blog_create, blog_post}