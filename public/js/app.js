
const prev_button=document.querySelector("#prev")
const next_button=document.querySelector("#next")
const random_button=document.querySelector('#rand')
const latest_button=document.querySelector('#latest')
const first_button=document.querySelector('#first')
const img_title=document.querySelector('#img_title')

let numb=0

// document.addEventListener('DOMContentLoaded', function() {
//     fetch('https://xkcd.com/info.0.json').then((response)=>{
//         response.json().then((data)=>{
//             numb=data.num
//             console.log(numb)
//         })
//     })
// }, false);
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById("next").disabled = true; 
//     console.log('disabled')
// }, false);

prev_button.addEventListener('click',(e)=>{
    console.log('btton clicked')
    fetch('/xkcd_app?button=prev').then((response)=>{
        response.json().then((data)=>{
            document.getElementById("imageid").src=data.img;
            img_title.textContent=data.title
        })
    }).catch((e)=>{
        console.log('fuck')
    })
})
random_button.addEventListener('click',(e)=>{
    console.log('btton clicked')
    fetch('/xkcd_app?button=random').then((response)=>{
        response.json().then((data)=>{
            document.getElementById("imageid").src=data.img;
            img_title.textContent=data.title
        })
    })
})
latest_button.addEventListener('click',(e)=>{
    console.log('btton clicked')
    fetch('/xkcd_app?button=latest').then((response)=>{
        response.json().then((data)=>{
            document.getElementById("imageid").src=data.img;
            img_title.textContent=data.title
        })
    })
})
first_button.addEventListener('click',(e)=>{
    console.log('btton clicked')
    fetch('/xkcd_app?button=first').then((response)=>{
        response.json().then((data)=>{
            document.getElementById("imageid").src=data.img;
            img_title.textContent=data.title
        })
    })
})
next_button.addEventListener('click',(e)=>{
    console.log('btton clicked')
    fetch('/xkcd_app?button=next').then((response)=>{
        response.json().then((data)=>{
            document.getElementById("imageid").src=data.img;
            img_title.textContent=data.title
        })
    }).catch((e)=>{
        console.log('Last image')
    })
})