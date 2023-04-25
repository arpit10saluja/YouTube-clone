import { navbar } from "../components/navbar.js"
    

    let  navbar_div=document.getElementById("navbar")
    navbar_div.innerHTML= navbar()

    let search_btn=document.getElementById("search_btn")
    search_btn.addEventListener("click",()=>{
        search_videos()
    })
    let auth=document.getElementById("auth")
    auth.addEventListener("click",()=>{
        window.location="auth.html"
    })

let playvideo= ()=>{
    let player_div=document.getElementById("player")
    let data= JSON.parse(localStorage.getItem("clicked_video"))


    let video=document.createElement("iframe")
    video.src=`https://www.youtube.com/embed/${data.videoId}`
    video.allowFullscreen=true;
    video.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    let {items}= data
    console.log([items])

player_div.append(video)

}

playvideo()
let suggest_div=document.getElementById("suggest")
let tranding_video= async ()=>{         // normal user view
    let loader=document.createElement("img")
    loader.src="https://www.dignited.com/wp-content/uploads/2019/07/cropped-buffering_1024x1024.jpg"
    suggest_div.append(loader)
    try{
        // const API_key='AIzaSyA4gxerlWooAUt8w5so-qGooaUGq-BO8I4'  //1  limit exceded
        // const API_key='AIzaSyBPqFfTNY8TPLtSzLrquNjlk7TbSPkTpvo'  //2 not used
        // const API_key='AIzaSyC1r4-Yc6nFe8TsmURNVNW5L8z_MqzaOYM'
        const API_key='AIzaSyDI-85ZXpK2zZ9Z0i8yXMdLRRDZ7oL90LY'




    let result_limit=20
    
    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${result_limit}&q=${"New"}=&key=${API_key}`)
    let Arr = await response.json()
    console.log(Arr)
    let data = Arr.items
    display(data);
    }

    catch(err){
        console.log(err)
    }
    
}
tranding_video()

let display = (data) =>{
    suggest_div.innerHTML=null
    
    data.forEach(({snippet, id:{videoId}}) => {

        let div=document.createElement("div")

        let thumbnail=document.createElement("img")
        thumbnail.src= snippet.thumbnails.high.url

        let title=document.createElement("p")
        title.innerText= snippet.title

        let channel_name= document.createElement("p")
        channel_name.innerText=snippet.channelTitle

        div.append(thumbnail,title,channel_name)

        div.onclick= () =>{
           let data={
            snippet,
            videoId
           }
           localStorage.setItem("clicked_video",JSON.stringify(data))
           window.location="video.html"
        }
        suggest_div.append(div)

    });
}
let search_videos =()=>{
    window.location= "index.html"
}

// <iframe width="560" height="315" 
// src="https://www.youtube.com/embed/F-x5FsGUuAw" 
// title="YouTube video player" frameborder="0"
//  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//  allowfullscreen></iframe>