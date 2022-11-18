

let stores=document.querySelector("div.stores")
const getStore=async()=>{
    let data=""
  let response= await fetch("http://localhost:3000/store").then((res)=>{
  return res.json()
  }).catch((err)=>{
   console.log(err);
  })
response.map((elem)=>{
    data+=` <div class="store" data-id="${elem.id}">
    <img src="${elem.images}" alt="${elem.alt}" />
    <h1>${elem.title_1}</h1>
    
    <h2>${elem.title_2}</h2>
  </div>`
 
})
   
    stores.innerHTML=data
stores.addEventListener("click", async(event)=> {
    const storeId=event.target.dataset.id
     if (event.target.className==="store") {
         const storeSingle=await fetch(`http://localhost:3000/store/${storeId}`).then((res)=>{
            return res.json()
         }).catch((err)=>{
         console.log(err);
         })
         stores.innerHTML=`<div class="storeSingle">
         <img src="${storeSingle.images}" alt="${storeSingle.alt}" />
         <h1>${storeSingle.title_1}</h1>
         
         <h2>${storeSingle.title_2}</h2>
        <button class="show-store">buy</button>
         </div>`


document.querySelector("div.storeSingle").style.width="40%"       
document.querySelector("div.storeSingle").style.padding="50px"      
document.querySelector("div.storeSingle").style.boxSizing="border-box"    
// document.querySelector("div.storeSingle").style.border="5px solid #2b2b2b"
document.querySelector("div.storeSingle").style.borderRadius="10px"
document.querySelector("div.storeSingle").style.display="flex"       
document.querySelector("div.storeSingle").style.flexDirection="column"
document.querySelector("div.storeSingle").style.cursor="pointer"

document.querySelector("div.storeSingle>img").style.marginBottom="20px"
document.querySelector("div.storeSingle>img").style.borderRadius="10px"


document.querySelector("div.storeSingle>h1").style.fontFamily="sans-serif" 
document.querySelector("div.storeSingle>h1").style.fontSize="35px"      
document.querySelector("div.storeSingle>h1").style.fontStyle="italic"  
document.querySelector("div.storeSingle>h1").style.textTransform="capitalize"  
document.querySelector("div.storeSingle>h1").style.textAlign="center"  
document.querySelector("div.storeSingle>h1").style.marginBottom="20px"  

document.querySelector("div.storeSingle>h2").style.fontFamily="sans-serif"
document.querySelector("div.storeSingle>h2").style.fontSize="20px"
document.querySelector("div.storeSingle>h1").style.fontStyle="oblique"
document.querySelector("div.storeSingle>h2").style.textAlign="center"
document.querySelector("div.storeSingle>h2").style.fontWeight="normal"  
document.querySelector("div.storeSingle>h2").style.color="#4154ff"  
document.querySelector("div.storeSingle>h2").style.marginBottom="20px" 

document.querySelector("div.storeSingle>button.show-store").style.width="150px" 
document.querySelector("div.storeSingle>button.show-store").style.height="50px" 
document.querySelector("div.storeSingle>button.show-store").style.border="none"
document.querySelector("div.storeSingle>button.show-store").style.borderRadius="10px"
document.querySelector("div.storeSingle>button.show-store").style.fontFamily="sans-serif"
document.querySelector("div.storeSingle>button.show-store").style.fontSize="20px"
document.querySelector("div.storeSingle>button.show-store").style.textTransform="capitalize"
document.querySelector("div.storeSingle>button.show-store").style.backgroundColor="#515b69" 
document.querySelector("div.storeSingle>button.show-store").style.cursor="pointer"
document.querySelector("div.storeSingle>button.show-store").style.margin="50px auto"
document.querySelector("div.storeSingle>button.show-store").addEventListener("mouseenter",function(){
  this.style.backgroundColor="blue"
  this.style.transition="all 300ms linear"
  
  setTimeout(()=>{
    getStore()
  },2000)
})



     }
    
  })


   
}

getStore()