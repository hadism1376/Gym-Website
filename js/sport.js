let sports=document.querySelector("div.sports")
let getSports=async()=>{
    let data=""
    let response=await fetch("http://localhost:3000/sports").then((res)=>{
     return res.json()
    }).catch((err)=>{
    console.log(err);
    })
    response.map((elem)=>{
     data+=`<div class="sport" data-id="${elem.id}">
     <img src="${elem.images}" alt="${elem.alt}">
     <h1>${elem.title_1}</h1>
     <h2>${elem.title_2}</h2>
   </div>`
    })
  
    sports.innerHTML=data

  
}


sports.addEventListener("click",async(event)=>{
    if (event.target.className==="sport") {
        let sportsId=event.target.dataset.id
        let sportSingle=await fetch(`http://localhost:3000/sports/${sportsId}`).then((res)=>{
        return res.json()
        }).catch((err)=>{
        console.log(err);
        })
        sports.innerHTML=`<div class="singleSport">
        <img src="${sportSingle.images}" alt="${sportSingle.alt}">
         <h1>${sportSingle.title_1}</h1>
         <h2>${sportSingle.title_2}</h2>
         <button class="show-sport">back</button>
        </div>`  
    }
    document.querySelector("div.singleSport>button.show-sport").style.width="50px"
    document.querySelector("div.singleSport>button.show-sport").style.height="50px"
    document.querySelector("div.singleSport>button.show-sport").style.backgroundColor="#0d24f0"
    document.querySelector("div.singleSport>button.show-sport").style.color="black"
    document.querySelector("div.singleSport>button.show-sport").style.border="none"
    document.querySelector("div.singleSport>button.show-sport").style.borderRadius="50%"
    document.querySelector("div.singleSport>button.show-sport").style.cursor="pointer"
    document.querySelector("div.singleSport>button.show-sport").style.textTransform="capitalize"
    document.querySelector("div.singleSport>button.show-sport").style.display="block"
    document.querySelector("div.singleSport>button.show-sport").style.margin="10px auto"

      document.querySelector("div.singleSport").style.width="45%"  
  document.querySelector("div.singleSport").style.height="450px"  
  document.querySelector("div.singleSport").style.cursor="pointer"
  document.querySelector("div.singleSport").style.padding="80px"  
  document.querySelector("div.singleSport").style.boxSizing="border-box"  
  document.querySelector("div.singleSport").style.margin="50px auto"  

  document.querySelector("div.singleSport>img").style.width="100%" 
  document.querySelector("div.singleSport>img").style.objectFit="cover"
  document.querySelector("div.singleSport>img").style.borderBottomLeftRadius="10px"
  document.querySelector("div.singleSport>img").style.borderBottomRightRadius="50px"
  document.querySelector("div.singleSport>img").style.borderTopLeftRadius="10px"
  document.querySelector("div.singleSport>img").style.borderTopRightRadius="10px"

  document.querySelector("div.singleSport>h1").style.fontFamily="sans-serif"
  document.querySelector("div.singleSport>h1").style.fontSize="28px"
  document.querySelector("div.singleSport>h1").style.fontWeight="normal"
  document.querySelector("div.singleSport>h1").style.fontStyle="italic"
  document.querySelector("div.singleSport>h1").style.textTransform="capitalize"
  document.querySelector("div.singleSport>h1").style.textAlign="center"
  document.querySelector("div.singleSport>h1").style.marginBottom="20px"
  document.querySelector("div.singleSport>h1").style.userSelect="none"

  document.querySelector("div.singleSport>h2").style.fontFamily="sans-serif"
  document.querySelector("div.singleSport>h2").style.fontSize="20px"
  document.querySelector("div.singleSport>h2").style.fontWeight="normal"
  document.querySelector("div.singleSport>h2").style.fontStyle="italic"
  document.querySelector("div.singleSport>h2").style.textTransform="capitalize"
  document.querySelector("div.singleSport>h2").style.textAlign="center"
  document.querySelector("div.singleSport>h2").style.color="#0d24f0"
  document.querySelector("div.singleSport>h2").style.userSelect="none"

   
  document.querySelector("button.show-sport").addEventListener("mouseenter",function () { 
    this.style.backgroundColor="#720b70"
    this.style.transition="all 300ms linear"
    setTimeout(()=>{
        getSports()
    },2000)
 })
})


getSports()

/*
 
*/ 