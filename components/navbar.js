const navbar =()=>{
    return `
    <div class="logo_menu">
        <img src="image/menu.jpg" alt="">
        <a href="index.html"><img src="image/logo.jpg" alt=""></a>
        
        
    </div>
    <div class="find">
        <input type="text" placeholder="Search" id="search_term">
        <button id="search_btn"><img src="image/search.jpg" alt=""></button>
        <img src="image/mic.jpg" alt="">
    </div>
    
    <div class="profile">
        <img src="image/camera.jpg" alt="">
        <img src="image/notify.jpg" alt="">
        <img id="auth" src="image/profile.jpg" alt="">
    </div>`

};

export {navbar}


const home=()=>{
    return `
    <div class="menu">
            <img src="image/home.jpg" alt="">
            <!-- <label for="home">Home</label> -->
            <img src="image/shorts.jpg" alt="">
            <!-- <label for="shorts">Shorts</label> -->
            <img src="image/collect.jpg" alt="">
            <!-- <label for="sub">Subscription</label> -->
            <img src="image/album.jpg" alt="">
            <!-- <label for="library">Library</label> -->

            <button id="views">views</button>
            <button id="Alphabet">Alphabet</button>
            <button id="Popularity">Popularity</button>
        </div>
    `
}

export {home}


// let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${result_limit}&order=${"viewCount"}&q=${"New"}=rrr&key=${API_key}`)


// let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${result_limit}&order=${"title"}&q=${"New"}=rrr&key=${API_key}`)