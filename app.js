const express=require('express')
const bodyparser=require('body-parser')
let app= express()

app.use(bodyparser.urlencoded({extended:false}))

app.use('/login', express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    res.send("Welcome To The Basic Implementation of Static Express and Body-Parser")
})

app.post('/login',(req,res)=>{
    //log the data given by user
    console.log(req.body)
    //perform database functions
    res.redirect('/')
})

app.listen(3000,()=>{
    console.log('Running on port 3000')
})