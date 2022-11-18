let sponsers=document.querySelector("div.sponsers")
let getSponser=async()=>{
    let data=""
    let response=await fetch("http://localhost:3000/sponser").then((res)=>{
      return res.json()
    }).catch((err)=>{
    console.log(err);
    })
    response.map((elem)=>{
      data+=` <div class="sponser" data-id="${elem.id}">
      <img src="${elem.images}" alt="${elem.alt}" />
      <p>${elem.title}
      </p>
  <a href="${elem.anchor}">${elem.link}</a>
    </div>`
   sponsers.innerHTML=data
    })


}
sponsers.addEventListener("click",async(event)=> {
    if (event.target.className==="sponser") {
        const sponserId=event.target.dataset.id
        const sponserSingle=await fetch(`http://localhost:3000/sponser/${sponserId}`).then((res)=>{
          return res.json()
        }).catch((err)=>{
         console.log(err);
        })
        sponsers.innerHTML=`<div class="single-sponser">
        <img src="${sponserSingle.images}" alt="${sponserSingle.alt}">
          <p>${sponserSingle.title}
          </p>
      <a href="${sponserSingle.anchor}">${sponserSingle.link}</a>
       
        </div>` 
    }




  document.querySelector("div.single-sponser").style.width="45%"  
  document.querySelector("div.single-sponser").style.height="450px"  
  document.querySelector("div.single-sponser").style.cursor="pointer"
  document.querySelector("div.single-sponser").style.padding="80px"  
  document.querySelector("div.single-sponser").style.boxSizing="border-box"  
  document.querySelector("div.single-sponser").style.margin="50px auto"  
  document.querySelector("div.single-sponser>img").style.width="50%" 
  document.querySelector("div.single-sponser>img").style.objectFit="cover"
//   document.querySelector("div.single-sponser>img").style.backgroundColor="red"
  document.querySelector("div.single-sponser>img").style.margin="10px auto"

 
  
  document.querySelector("div.single-sponser>p").style.height="150px" 
  document.querySelector("div.single-sponser>p").style.lineHeight="40px" 
  document.querySelector("div.single-sponser>p").style.fontFamily="sans-serif" 
  document.querySelector("div.single-sponser>p").style.fontSize="16px" 
  document.querySelector("div.single-sponser>p").style.color="#888"
  document.querySelector("div.single-sponser>p").style.fontWeight="normal"
  document.querySelector("div.single-sponser>p").style.marginBottom="20px"
  document.querySelector("div.single-sponser>p").style.userSelect="none"
  document.querySelector("div.single-sponser>a").style.display="block"
  document.querySelector("div.single-sponser>a").style.width="150px"
  document.querySelector("div.single-sponser>a").style.height="50px"
  document.querySelector("div.single-sponser>a").style.lineHeight="50px"
  document.querySelector("div.single-sponser>a").style.fontFamily="sans-serif"
  document.querySelector("div.single-sponser>a").style.fontSize="14px"
  document.querySelector("div.single-sponser>a").style.fontWeight="normal"
  document.querySelector("div.single-sponser>a").style.textDecoration="none"
  document.querySelector("div.single-sponser>a").style.textTransform="capitalize"
  document.querySelector("div.single-sponser>a").style.color="#000"
  document.querySelector("div.single-sponser>a").style.textAlign="center"
  document.querySelector("div.single-sponser>a").style.margin="10px auto"


  

  })


getSponser()