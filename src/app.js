const request=require('request')
const express=require('express')
require('any-promise/register/q')
const rp = require('request-promise-any')
const path=require('path')
const hbs=require('hbs')
const latest_image=require('./utils/latest_img.js')
const prev_image=require('./utils/prev_img.js')
const next_image=require('./utils/next_img.js')
const random_image=require('./utils/random_img.js')
const first_image=require('./utils/first_img.js')

const port=process.env.PORT || 3000
const app=express()

const directory=path.join(__dirname,'../public')
const templateLoc=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

app.set('view engine', 'hbs')
app.set('views', templateLoc)
app.use(express.static(directory))
hbs.registerPartials(partialsPath)

let c_num=1
let new_num=1

app.get('',(req,res)=>{
    latest_image().then((response)=>{
        res.render('index',{
            title:'XKCD-comics',
            name:'Vansh',
            img_url:response.img,
            text:response.safe_title
        })
        new_num=response.num
        c_num=response.num
    }).catch((e)=>{
        console.log(e)
    })
})

// latest_image().then((response)=>{
//     app.get('',(req,res)=>{
//         res.render('index',{
//             title:'XKCD-comics',
//             name:'Vansh',
//             img_url:response.img
//         })
//     })
//     c_num=response.num
    
// })

app.get('/xkcd_app',(req,res)=>{
    if(req.query.button=="prev"){
        prev_image(c_num).then((response)=>{
            res.send({
                new_num,
                img:response.img,
                num:response.num,
                title:response.safe_title
            })
            c_num=response.num
        })
        
    }
    if(req.query.button=="random"){
        random_image(c_num).then((response)=>{
            res.send({
                new_num,
                img:response.img,
                num:response.num,
                title:response.safe_title
            })
            c_num=response.num
        })
        
    }
    if(req.query.button=="next"){
        next_image(c_num, new_num).then((response)=>{
            res.send({
                new_num,
                img:response.img,
                num:response.num,
                title:response.safe_title
            })
            console.log('rn')
            c_num=response.num
        }).catch((e)=>{
        })
        
    }
    if(req.query.button=="latest"){
        latest_image().then((response)=>{
            res.send({
                new_num,
                img:response.img,
                num:response.num,
                title:response.safe_title
            })
            c_num=response.num
        })
        
    }
    if(req.query.button=="first"){
        first_image().then((response)=>{
            res.send({
                new_num,
                img:response.img,
                num:response.num,
                title:response.safe_title
            })
           
        })
        c_num=1
    }
})


app.listen(port,()=>{
    
})