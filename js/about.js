let abouts=document.querySelector("div.abouts")
const getAbouts=async()=>{
   let item=""
   const response=await fetch("http://localhost:3000/about").then((res)=>{
    return res.json()

   }).catch((err)=>{
   console.log(err);
   })
   response.map((elem)=>{
    item+=` <div class="about" data-id="${elem.id}">
    <img src="${elem.images}" alt="${elem.alt}">
    <h1>${elem.title_1}</h1>
    <h2>${elem.title_2}</h2>
    <p>
     ${elem.text}
    </p>
    <a href="${elem.link}">${elem.anchor}</a>

   </div>`
   })
   setTimeout(()=>{
      abouts.innerHTML=item
   },2700)
}
abouts.addEventListener("click", async(event)=> {  
    // console.log(event.target.className);
 if (event.target.className==="about") {
    const aboutId=event.target.dataset.id
 const aboutSingle=await fetch(`http://localhost:3000/about/${aboutId}`).then((res)=>{
    return res.json()
 }).catch((err)=>{
    console.log(err);
 })
 abouts.innerHTML=`<div class="single-about">
 <img src="${aboutSingle.images}" alt="${aboutSingle.alt}">
 <h1>${aboutSingle.title_1}</h1>

 <h2>${aboutSingle.title_2}</h2>
 <p>
  ${aboutSingle.text}
 </p>
 <button class="show-all">&larrhk;</button>
 </div>
 `
 document.querySelector("div.single-about").style.width="40%"
 document.querySelector("div.single-about").style.height="675px"
 document.querySelector("div.single-about").style.padding="20px"
 document.querySelector("div.single-about").style.boxSizing="border-box"
 document.querySelector("div.single-about").style.border="5px solid #4154ff"
 document.querySelector("div.single-about").style.margin="50px auto"
 document.querySelector("div.single-about").style.borderRadius="10px"
 document.querySelector("div.single-about").style.display="flex"
 document.querySelector("div.single-about").style.justifyContent="center"
 document.querySelector("div.single-about").style.flexWrap="wrap"
 document.querySelector("div.single-about").style.cursor="pointer"

 document.querySelector("div.single-about>img").style.width="80%"
 document.querySelector("div.single-about>img").style.height="280px"
 document.querySelector("div.single-about>img").style.objectFit="cover"

 document.querySelector("div.single-about>h1").style.fontFamily="sans-serif"
 document.querySelector("div.single-about>h1").style.color="whitesmoke"
 document.querySelector("div.single-about>h1").style.textTransform="capitalize"
 document.querySelector("div.single-about>h1").style.fontSize="35px"
 document.querySelector("div.single-about>h1").style.padding="10px"
 document.querySelector("div.single-about>h1").style.boxSizing="border-box"

 document.querySelector("div.single-about>h2").style.textAlign="center"
 document.querySelector("div.single-about>h2").style.fontFamily="sans-serif"
 document.querySelector("div.single-about>h2").style.color="yellow"
 document.querySelector("div.single-about>h2").style.textTransform="capitalize"
 document.querySelector("div.single-about>h2").style.fontSize="25px"
 document.querySelector("div.single-about>h2").style.padding="20px"
 document.querySelector("div.single-about>h2").style.boxSizing="border-box"

 document.querySelector("div.single-about>p").style.height="200px"
 document.querySelector("div.single-about>p").style.lineHeight="40px"
 document.querySelector("div.single-about>p").style.padding="10px"
 document.querySelector("div.single-about>p").style.boxSizing="border-box"
 document.querySelector("div.single-about>p").style.fontWeight="normal"
 document.querySelector("div.single-about>p").style.color="#ffffff"
 document.querySelector("div.single-about>p").style.fontFamily="sans-serif"
 document.querySelector("div.single-about>p").style.fontSize="18px"

 document.querySelector("div.single-about>button").style.width="30px"
 document.querySelector("div.single-about>button").style.height="30px"
 document.querySelector("div.single-about>button").style.lineHeight="30px"
 document.querySelector("div.single-about>button").style.border="none"
 document.querySelector("div.single-about>button").style.color="black"
 document.querySelector("div.single-about>button").style.backgroundColor="blue"
 document.querySelector("div.single-about>button").style.cursor="pointer"
 document.querySelector("div.single-about>button").style.borderRadius="50%"

 document.querySelector("div.single-about>button").addEventListener("mouseenter",function () {
   this.style.backgroundColor="#4154ff"
   this.style.transition="all 300ms linear"
   })
   document.querySelector("div.single-about>button").addEventListener("mouseleave",function () {
      this.style.backgroundColor="#1a1f7c"
      this.style.transition="all 300ms linear"
      })













 }
 document.querySelector("div.abouts").addEventListener("click",()=>{
    if (event.target.className==="show-all") {
        setTimeout(()=>{
            getAbouts()
        },2000)
    }




 })
 
})
getAbouts()