const request=require('request')
require('any-promise/register/q')
const rp = require('request-promise-any')

const prev_img= async (current)=>{
    if(current===1){
        const url='https://xkcd.com/'+current+'/info.0.json'
        const xkcd_data=await rp({url, json:true})
        console.log('first image')
        return xkcd_data
    }
    let num=current-1
    const url='https://xkcd.com/'+num+'/info.0.json'
    const xkcd_data=await rp({url, json:true})
    return xkcd_data
}

module.exports=prev_img