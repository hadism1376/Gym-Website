let photo=document.querySelector("div.photo")
const getPhoto=async()=>{
    let data=""
    let ressponse=await fetch("http://localhost:3000/photos").then((res)=>{
    return res.json()
    }).catch((err)=>{
     console.log(err);
    })
   ressponse.map((elem)=>{
    data+=`<h1>${elem.title_1}</h1>
  <p>${elem.title_2}</p>
  <button>${elem.btn}</button>`
   })
   
    photo.innerHTML=data
   
   
}
getPhoto()



