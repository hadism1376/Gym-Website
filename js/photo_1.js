let photo_1=document.querySelector("div.photo_1")
const getPhoto_1=async()=>{
    let data=""
    let response=await fetch("http://localhost:3000/photo_1").then((res)=>{
    return res.json()
    }).catch((err)=>{
     console.log(err);
    })
   response.map((elem)=>{
    data+=`<h1>${elem.title_1}</h1>
  <p>${elem.title_2}</p>
  <button>${elem.btn}</button>`
   })
   
    photo_1.innerHTML=data

   
   
}

getPhoto_1()



