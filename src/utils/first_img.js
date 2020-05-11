const request=require('request')
require('any-promise/register/q')
const rp = require('request-promise-any')

const next_img= async ()=>{
    const url='https://xkcd.com/1/info.0.json'
    const xkcd_data=await rp({url, json:true})
    return xkcd_data
}

module.exports=next_img