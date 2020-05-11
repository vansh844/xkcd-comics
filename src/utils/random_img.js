const request=require('request')
require('any-promise/register/q')
const rp = require('request-promise-any')
const latest=require('./latest_img.js')
var num=1

const random_img= async ()=>{
    latest().then((response)=>{
        num=Math.floor(Math.random() * response.num) + 1  
        
    })
    const url='https://xkcd.com/'+num+'/info.0.json'
    const xkcd_data=await rp({url, json:true})
    return xkcd_data
}

module.exports=random_img