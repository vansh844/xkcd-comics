const request=require('request')
require('any-promise/register/q')
const rp = require('request-promise-any')

const latest_image= async ()=>{
    const url='https://xkcd.com/info.0.json'
    const xkcd_data=await rp({url, json:true})
    return xkcd_data
}

module.exports=latest_image