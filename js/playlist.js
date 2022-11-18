const playlists=document.querySelector("div.playlists")
const getPlaylists=async()=>{
    let data=""
    const response=await fetch("http://localhost:3000/playlist").then((res)=>{
     return res.json()
    }).catch((err)=>{
    console.log(err);
    })
  response.map((elem)=>{
    data+=`<div class="playlist" data-id="${elem.id}">
    <img src="${elem.images}" alt="${elem.alt}"/>
    <h1>${elem.title_1}</h1>
    <h2>${elem.title_2}</h2>
  </div>` 
  })
  playlists.innerHTML=data
}



playlists.addEventListener("click",async(event)=>{
    if (event.target.className==="playlist") {
        const playlistId=event.target.dataset.id
        const playListSingle=await fetch(`http://localhost:3000/playlist/${playlistId}`).then((res)=>{
         return res.json()
        }).catch((err)=>{
         console.log(err);
        })
          playlists.innerHTML=`<div class="playSingle">
          <img src="${playListSingle.images}" alt="${playListSingle.alt}"/>
          <h1>${playListSingle.title_1}</h1>
          <h2>${playListSingle.title_2}</h2>
          <button class="show-play">&larrhk;</button>
          
          </div>`  
    }





    
    document.querySelector("div.playSingle").style.width="80%"
    document.querySelector("div.playSingle").style.padding="50px"
    document.querySelector("div.playSingle").style.boxSizing="border-box" 
    document.querySelector("div.playSingle").style.cursor="pointer"
    
    
   

    document.querySelector("div.playSingle>img").style.width="100%"
    document.querySelector("div.playSingle>img").style.objectFit="cover"
    document.querySelector("div.playSingle>img").style.backgroundSize ="cover"
    document.querySelector("div.playSingle>img").style.borderBottomRightRadius="60px"
    document.querySelector("div.playSingle>img").style.borderTopLeftRadius="15px"
    document.querySelector("div.playSingle>img").style.borderTopRightRadius="15px"
    document.querySelector("div.playSingle>img").style.borderBottomLeftRadius="15px"

    document.querySelector("div.playSingle>h1").style.fontFamily="sans-serif"
      document.querySelector("div.playSingle>h1").style.fontSize="30px"
      document.querySelector("div.playSingle>h1").style.color="#060607"
      document.querySelector("div.playSingle>h1").style.padding="10px"
      document.querySelector("div.playSingle>h1").style.boxSizing="border-box"
      document.querySelector("div.playSingle>h1").style.userSelect="none"
      document.querySelector("div.playSingle>h1").style.fontWeight="normal"
      document.querySelector("div.playSingle>h1").style.textAlign="center"

      document.querySelector("div.playSingle>h2").style.fontFamily="sans-serif"
      document.querySelector("div.playSingle>h2").style.fontSize="20px"
      document.querySelector("div.playSingle>h2").style.color="#4154ff"
      document.querySelector("div.playSingle>h2").style.padding="20px"
      document.querySelector("div.playSingle>h2").style.boxSizing="border-box"
      document.querySelector("div.playSingle>h2").style.userSelect="none"
      document.querySelector("div.playSingle>h2").style.fontWeight="normal"
      document.querySelector("div.playSingle>h2").style.textAlign="center"


document.querySelector("div.playSingle>button.show-play").style.width="50px"
document.querySelector("div.playSingle>button.show-play").style.height="50px"
document.querySelector("div.playSingle>button.show-play").style.lineHeight="50px"
document.querySelector("div.playSingle>button.show-play").style.color="grey"
document.querySelector("div.playSingle>button.show-play").style.border="none"
document.querySelector("div.playSingle>button.show-play").style.borderRadius="50%"
document.querySelector("div.playSingle>button.show-play").style.backgroundColor="#2b2b2b"
document.querySelector("div.playSingle>button.show-play").style.cursor="pointer"
document.querySelector("div.playSingle>button.show-play").style.margin="center"
document.querySelector("div.playSingle>button.show-play").style.display="block"
document.querySelector("div.playSingle>button.show-play").style.margin="0 auto"

document.querySelector("button.show-play").addEventListener("mouseenter",function () {
    this.style.backgroundColor="blue"
    this.style.transition="all 300ms linear"
    setTimeout(()=>{
        getPlaylists()
    },2000)
  })
})
getPlaylists()