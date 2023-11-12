let button =document.querySelector("button")
let img=document.querySelector("img")
 
function meme(){
    let url="https://meme-api.com/gimme"
    fetch(url).then(response=>response.json()).then(data=>
        {img.src=data.url})
    .catch(err=>{
        console.log(err)
    })

}
meme();
button.addEventListener('click',meme)