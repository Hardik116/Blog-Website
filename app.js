const express = require('express');
const app =  express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogroutes= require('./routes/blogroutes')


dbURI =''

mongoose.connect(dbURI).then((result)=>{console.log("connected to DB")}).catch((err)=>{console.log(err)})

app.set('view engine','ejs');

app.listen(3000);

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'));

app.use((req,res,next)=>{
    console.log("new request made");
    console.log("host: ",req.hostname);
    console.log("path: ",req.path);
    console.log("method: ",req.method);
    next();
})

app.use(blogroutes);

app.get('/',(req,res)=>{
    res.redirect('/blog')
    res.render('index',{title:"Home" ,blogs});
});

app.get('/about',(req,res)=>{
    res.render('about');
})
app.get('/about-me',(req,res)=>{
    res.render('about');
})


app.use((req,res)=>{
    res.status(400).render('404')
})
