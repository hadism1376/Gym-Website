 /* make products*/  
 const products=document.querySelector("div.products")
 
 const getProducts=async()=>{
  let data=""
const response=await fetch("http://localhost:3000/products").then((response)=>{
 return response.json()
 }).catch((err)=>{
 console.log(err);
 })

response.map((elem)=>{
    data+=`<div class="product" data-id="${elem.id}">
    <img src="${elem.photos}" alt="${elem.alt}"/>
    <h1>${elem.title}</h1>
    <p>${elem.description}</p>
    <a href="${elem.link}">${elem.anchor}</a>
    </div>`
})




setTimeout(()=>{
  products.innerHTML=data
},2000)
 
 }
 products.addEventListener("click",async(event)=>{
  if (event.target.className==="product") {
    const productId=event.target.dataset.id
    const productSingle=await fetch(`http://localhost:3000/products/${productId}`).then((res)=>{
      return res.json()
    }).catch((err)=>{
     console.log(err);
    })
   products.innerHTML=`<div class="singleProduct">
   <img src="${productSingle.photos}" alt="${productSingle.alt}" />
   <h1>${productSingle.title}</h1>
   <p>${productSingle.description}</p>
   <button class="show-all-item">&larrhk;</button>
 
   </div>`
  }

document.querySelector("div.singleProduct").style.width="45%"  
document.querySelector("div.singleProduct").style.height="550px"  
document.querySelector("div.singleProduct").style.margin="50px auto"
document.querySelector("div.singleProduct").style.padding="50px"
document.querySelector("div.singleProduct").style.boxSizing="border-box"
document.querySelector("div.singleProduct").style.display="flex"
document.querySelector("div.singleProduct").style.justifyContent="center"
document.querySelector("div.singleProduct").style.alignItems="center"
document.querySelector("div.singleProduct").style.flexWrap="wrap"
document.querySelector("div.singleProduct").style.cursor="pointer"

document.querySelector("div.singleProduct>img").style.width="100%"
document.querySelector("div.singleProduct>img").style.padding="20px"
document.querySelector("div.singleProduct>img").style.boxSizing="border-box"
document.querySelector("div.singleProduct>img").style.objectFit="cover"
document.querySelector("div.singleProduct>img").style.marginBottom="10px"

document.querySelector("div.singleProduct>h1").style.color="black"
document.querySelector("div.singleProduct>h1").style.fontFamily="sans-serif"
document.querySelector("div.singleProduct>h1").style.fontSize="30px"
document.querySelector("div.singleProduct>h1").style.textTransform="capitalize"
document.querySelector("div.singleProduct>h1").style.marginBottom="5px"
document.querySelector("div.singleProduct>h1").style.textAlign="center"
document.querySelector("div.singleProduct>h1").style.userSelect="none"


document.querySelector("div.singleProduct>p").style.color="#72849c"
document.querySelector("div.singleProduct>p").style.fontFamily="sans-serif"
document.querySelector("div.singleProduct>p").style.fontSize="16px"
document.querySelector("div.singleProduct>p").style.lineHeight="20px"
document.querySelector("div.singleProduct>p").style.marginBottom="5px"
document.querySelector("div.singleProduct>p").style.textAlign="justify"
document.querySelector("div.singleProduct>p").style.userSelect="none"
document.querySelector("div.singleProduct>p").style.padding="10px"
document.querySelector("div.singleProduct>p").style.boxSizing="border-box"

document.querySelector("div.singleProduct>button.show-all-item").style.width="50px"
document.querySelector("div.singleProduct>button.show-all-item").style.height="50px"
document.querySelector("div.singleProduct>button.show-all-item").style.backgroundColor="#2b2b2b"
document.querySelector("div.singleProduct>button.show-all-item").style.color="#515b69"
document.querySelector("div.singleProduct>button.show-all-item").style.border="none"
document.querySelector("div.singleProduct>button.show-all-item").style.borderRadius="50%"
document.querySelector("div.singleProduct>button.show-all-item").style.cursor="pointer"
document.querySelector("div.singleProduct>button.show-all-item").addEventListener("mouseenter",function () { 
  this.style.backgroundColor="blue"
  this.style.transition="all 300ms linear"
 })
 document.querySelector("div.singleProduct>button.show-all-item").addEventListener("mouseleave",function () { 
  this.style.backgroundColor="grey"
  this.style.transition="all 300ms linear"
 })



 })
 document.querySelector("div.products").addEventListener("click",(event)=>{
  if (event.target.className==="show-all-item") {
    
    getProducts()
  }

 })
 
 getProducts()
 
  
 
 
 
  /*end make products*/   