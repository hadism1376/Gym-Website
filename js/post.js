/* make post*/
let posts=document.querySelector("div.posts")

const getPosts=async()=>{
    const response=await fetch("http://localhost:3000/posts").then((res)=>{
        return res.json()
    }).catch((err)=>{
     console.log(err);
    })



   let item=""
   response.map((elem)=>{
    item+=` <div class="post" data-id=${elem.id}>
    <img src="${elem.images}" alt="${elem.alt}">
    <h1>${elem.title}</h1>
    <p>${elem.text}</p>
    <a href="${elem.link}">${elem.anchor}</a>
</div>`

   })
    setTimeout(()=>{
document.querySelector("div.posts>div.spinner").style.display="none"
        posts.innerHTML=item
    },1500)


//   let post=[...document.querySelectorAll("div.posts>div.post")]
 
  posts.addEventListener("click",async(event)=> { 
    // let post=document.querySelector("div.posts>div.post")
     if (event.target.className==="post") {
        const postId=event.target.dataset.id
        const postSingle=await fetch(`http://localhost:3000/posts/${postId}`).then((response)=>{
         return response.json() 
        }).catch((err)=>{
            console.log(err);
        })
        posts.innerHTML=`<div class="single-post">  
        <img src="${postSingle.images}" alt="${postSingle.alt}">  
        <h1>${postSingle.title}</h1>
        <p>${postSingle.text}</p>
        <a href="${postSingle.link}">${postSingle.anchor}</a><button class="show-all-data">&larrhk;</button>
        
     </div>`
          
      } 
      document.querySelector("div.single-post").style.width="50%"
      document.querySelector("div.single-post").style.padding="50px"
      document.querySelector("div.single-post").style.boxSizing="border-box" 
      document.querySelector("div.single-post").style.cursor="pointer"

      document.querySelector("div.single-post>img").style.width="100%"
      document.querySelector("div.single-post>img").style.objectFit="cover"

      document.querySelector("div.single-post>h1").style.fontFamily="sans-serif"
      document.querySelector("div.single-post>h1").style.fontSize="28px"
      document.querySelector("div.single-post>h1").style.color="#2b2b2b"
      document.querySelector("div.single-post>h1").style.padding="10px"
      document.querySelector("div.single-post>h1").style.boxSizing="border-box"
      document.querySelector("div.single-post>h1").style.marginBottom="2px"
      document.querySelector("div.single-post>h1").style.userSelect="none"
      document.querySelector("div.single-post>h1").style.textTransform="capitalize"

      document.querySelector("div.single-post>p").style.fontFamily="sans-serif"
      document.querySelector("div.single-post>p").style.fontSize="20px"
      document.querySelector("div.single-post>p").style.color="#2b2b2b"
      document.querySelector("div.single-post>p").style.textAlign="justify"
      document.querySelector("div.single-post>p").style.textTransform="capitalize"
      document.querySelector("div.single-post>p").style.padding="10px"
      document.querySelector("div.single-post>p").style.boxSizing="border-box"
      document.querySelector("div.single-post>p").style.userSelect="none"

      document.querySelector("div.single-post>a").style.display="block"
      document.querySelector("div.single-post>a").style.height="50px"
      document.querySelector("div.single-post>a").style.lineHeight="50px"
      document.querySelector("div.single-post>a").style.fontFamily="sans-serif"
      document.querySelector("div.single-post>a").style.fontSize="14px"
      document.querySelector("div.single-post>a").style.color="#2b2b2b"
      document.querySelector("div.single-post>a").style.textAlign="center"
      document.querySelector("div.single-post>a").style.textTransform="uppercase"
      document.querySelector("div.single-post>a").style.textDecoration="none"
      
document.querySelector("div.single-post>button.show-all-data").style.width="50px"
document.querySelector("div.single-post>button.show-all-data").style.height="50px"
document.querySelector("div.single-post>button.show-all-data").style.lineHeight="50px"
document.querySelector("div.single-post>button.show-all-data").style.display="block"
document.querySelector("div.single-post>button.show-all-data").style.margin="0 auto"
document.querySelector("div.single-post>button.show-all-data").style.color="wheat"
document.querySelector("div.single-post>button.show-all-data").style.border="none"
document.querySelector("div.single-post>button.show-all-data").style.borderRadius="50%"
document.querySelector("div.single-post>button.show-all-data").style.backgroundColor="#2b2b2b"
document.querySelector("div.single-post>button.show-all-data").style.cursor="pointer"

document.querySelector("div.single-post>button.show-all-data").addEventListener("mouseenter",function () {
    this.style.backgroundColor="#7f8795"
    this.style.transition="all 300ms linear"
 
  })
 
    })  
  

}
document.querySelector("div.posts").addEventListener("click",function (event) { 
    if (event.target.className==="show-all-data") {
       document.querySelector("div.posts").innerHTML=`<div class="spinner"></div>` 
       getPosts()
    }

 })


getPosts()


/* end make post*/