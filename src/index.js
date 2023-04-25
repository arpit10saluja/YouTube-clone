    import { navbar } from "../components/navbar.js"
    import { home } from "../components/navbar.js"

    let  navbar_div=document.getElementById("navbar")  // navbar appending
    navbar_div.innerHTML= navbar()

    let home_div=document.getElementById("home")       // home div appending
    home_div.innerHTML=home()

    let search_btn=document.getElementById("search_btn")        // search event listner 
    search_btn.addEventListener("click",()=>{
        search_videos()
    })
    let auth=document.getElementById("auth")        // auth event listner 
    auth.addEventListener("click",()=>{
        window.location="auth.html"
    })
    



const continer=document.getElementById("continer")

const search_videos= async ()=>{            // search video results

    let loader=document.createElement("img")
    loader.src="https://www.dignited.com/wp-content/uploads/2019/07/cropped-buffering_1024x1024.jpg"
    continer.append(loader)

    try{
        // const API_key='AIzaSyA4gxerlWooAUt8w5so-qGooaUGq-BO8I4'  err403
        const API_key='AIzaSyDI-85ZXpK2zZ9Z0i8yXMdLRRDZ7oL90LY'


    let result_limit=20
    
    let search_bar=document.getElementById("search_term").value;

    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${result_limit}&q=${search_bar}=&key=${API_key}`)

    let Arr = await response.json()
    
    let data = Arr.items
    display(data);

    }

    catch(err){
        console.log(err)
    }
    
}


let tranding_video= async ()=>{         // normal user view
    let loader=document.createElement("img")
    loader.src="https://www.dignited.com/wp-content/uploads/2019/07/cropped-buffering_1024x1024.jpg"
    continer.append(loader)
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


let views=document.getElementById("views")   // data accourding to views
    views.addEventListener("click",async ()=>{
        
        let loader=document.createElement("img")
    loader.src="https://www.dignited.com/wp-content/uploads/2019/07/cropped-buffering_1024x1024.jpg"
    continer.append(loader)
    try{
        // const API_key='AIzaSyA4gxerlWooAUt8w5so-qGooaUGq-BO8I4'  1  limit exceded
        // const API_key='AIzaSyBPqFfTNY8TPLtSzLrquNjlk7TbSPkTpvo'  2 not used
        // const API_key='AIzaSyC1r4-Yc6nFe8TsmURNVNW5L8z_MqzaOYM'
        const API_key='AIzaSyDI-85ZXpK2zZ9Z0i8yXMdLRRDZ7oL90LY'



    let result_limit=20
    let search_bar=document.getElementById("search_term").value;
    
    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${result_limit}&order=${"viewCount"}&q=${search_bar}=&key=${API_key}`)

    let Arr = await response.json()
    let data = Arr.items
    display(data);


    }

    catch(err){
        console.log(err)
    }



    })

    let Alphabet=document.getElementById("Alphabet")    // data accourding to alphabet
    Alphabet.addEventListener("click",async ()=>{
        let loader=document.createElement("img")
        loader.src="https://www.dignited.com/wp-content/uploads/2019/07/cropped-buffering_1024x1024.jpg"
        continer.append(loader)
        try{
            // const API_key='AIzaSyA4gxerlWooAUt8w5so-qGooaUGq-BO8I4'  1  limit exceded
            // const API_key='AIzaSyBPqFfTNY8TPLtSzLrquNjlk7TbSPkTpvo'  2 not used
            // const API_key='AIzaSyC1r4-Yc6nFe8TsmURNVNW5L8z_MqzaOYM'
         const API_key='AIzaSyDI-85ZXpK2zZ9Z0i8yXMdLRRDZ7oL90LY'
            
    
    
        let result_limit=20
        let search_bar=document.getElementById("search_term").value;
        
        let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${result_limit}&order=${"title"}&q=${search_bar}=&key=${API_key}`)
    
        let Arr = await response.json()
        let data = Arr.items
        display(data);
    
    
        }
    
        catch(err){
            console.log(err)
        }
    
    
    })


    let Popularity=document.getElementById("Popularity")       // data accouding to popularity
    Popularity.addEventListener("click",async ()=>{
        let loader=document.createElement("img")
        loader.src="https://www.dignited.com/wp-content/uploads/2019/07/cropped-buffering_1024x1024.jpg"
        continer.append(loader)
        try{
            // const API_key='AIzaSyA4gxerlWooAUt8w5so-qGooaUGq-BO8I4'  1  limit exceded
            // const API_key='AIzaSyBPqFfTNY8TPLtSzLrquNjlk7TbSPkTpvo'  2 not used
            // const API_key='AIzaSyC1r4-Yc6nFe8TsmURNVNW5L8z_MqzaOYM'
        const API_key='AIzaSyDI-85ZXpK2zZ9Z0i8yXMdLRRDZ7oL90LY'

    
    
        let result_limit=20
        let search_bar=document.getElementById("search_term").value;
        
        let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${result_limit}&order=${"rating"}&q=${search_bar|| "new"}=&key=${API_key}`)
    
        let Arr = await response.json()
        let data = Arr.items
        display(data);
    
    
        }
    
        catch(err){
            console.log(err)
        }
    })



let display = (data) =>{
    continer.innerHTML=null
    
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
        continer.append(div)

    });
}