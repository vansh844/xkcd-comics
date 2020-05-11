const request=require('request')
require('any-promise/register/q')
const rp = require('request-promise-any')

const next_img= async (current, latest_num)=>{
    // latest().then((data)=>{
    //     latest_num=data.num
    // })
    if(latest_num==current){
        const url='https://xkcd.com/'+current+'/info.0.json'
        const xkcd_data=await rp({url, json:true})
        console.log('same image')
        return xkcd_data
        
    }else{
        let num=current+1
        const url='https://xkcd.com/'+num+'/info.0.json'
        const xkcd_data=await rp({url, json:true})
        return xkcd_data
    }
    
}

module.exports=next_img