$('ul>li>a').on("click",function () {
    let attr=$(this).attr("href")
    $("html,body").animate({
        scrollTop:$(attr).offset().top
    },500,"swing")
  })

let swiperWrapper=document.querySelector("div.swiper-wrapper")

let getSlider=async()=>{
    let response=await fetch("http://localhost:3000/slider").then((res)=>{
     return res.json()
    }).catch((err)=>{
    console.log(err);
    })
    let html=""
    response.map((elem)=>{
      html+=`<div class="swiper-slide">
      <img src="${elem.images}" alt="${elem.alt}">
      
    </div>`


    })
    setTimeout(()=>{

        swiperWrapper.innerHTML=html
    },4000)
}
getSlider()