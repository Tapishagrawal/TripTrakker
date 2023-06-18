// Card scroll functionality Start
const cardContainer = document.querySelector(".card-container")
const arrowBtns = document.querySelectorAll(".cardbtn i")
const forstCardWidth = cardContainer.querySelector(".card").offsetWidth;
arrowBtns.forEach(btn =>{
    btn.addEventListener("click",()=>{
        cardContainer.scrollLeft += btn.id === "left" ? -forstCardWidth : forstCardWidth
    })
})
let isDragging = false, startX,StartScrollLeft;
const dragStart = (e)=>{
    isDragging  = true
    cardContainer.classList.add("dragging")
    startX = e.pageX;
    StartScrollLeft = cardContainer.scrollLeft;
}
const dragging = (e)=>{
    if(!isDragging) return
    cardContainer.scrollLeft = StartScrollLeft - (e.pageX - startX)
}
const dragStop = ()=>{
    isDragging  = false
    cardContainer.classList.remove("dragging")
}
cardContainer.addEventListener("mousedown",dragStart)
cardContainer.addEventListener("mousemove",dragging)
cardContainer.addEventListener("mouseup",dragStop)
// Card scroll functionality End

//Toggle Card Like add and remove start
const cardHeart = document.querySelectorAll(".card-img-cont > i")

cardHeart.forEach((e)=>{
    e.addEventListener("click",()=>{
        e.classList.toggle("fa-solid")
    })
})
//Toggle Card Like add and remove End

// FAQ Start
const faqQuestion = document.getElementsByClassName("faq-question");
for(let i = 0; i < faqQuestion.length; i++){
    faqQuestion[i].addEventListener("click",function(){
        this.classList.toggle("active")
        this.parentElement.classList.toggle("active");

        var faqAns = this.nextElementSibling;
        if(faqAns.style.display=="block"){
            faqAns.style.display="none"
        }else{
            faqAns.style.display="block"
        }
    })
}
// FAQ End

const LSData = JSON.parse(localStorage.getItem("indicard-data")) || [];

let swiperWrapper = document.querySelector(".swiper-wrapper")
slideBarDisplay(LSData)
function slideBarDisplay(data){
    data.forEach((item)=>{
        let swiperSlide1 = document.createElement("div")
        swiperSlide1.setAttribute("class","swiper-slide")
        swiperWrapper.appendChild(swiperSlide1)

        let showcaseSliderImg1 = document.createElement("div")
        showcaseSliderImg1.setAttribute("class","showcase-slider-img")
        swiperSlide1.appendChild(showcaseSliderImg1)
        
        let img1 = document.createElement("img")
        img1.setAttribute("src",item.showimage1)
        showcaseSliderImg1.appendChild(img1)

        let swiperSlide2 = document.createElement("div")
        swiperSlide2.setAttribute("class","swiper-slide")
        swiperWrapper.appendChild(swiperSlide2)

        let showcaseSliderImg2 = document.createElement("div")
        showcaseSliderImg2.setAttribute("class","showcase-slider-img")
        swiperSlide2.appendChild(showcaseSliderImg2)
        
        let img2 = document.createElement("img")
        img2.setAttribute("src",item.showimage2)
        showcaseSliderImg2.appendChild(img2)

        let swiperSlide3 = document.createElement("div")
        swiperSlide3.setAttribute("class","swiper-slide")
        swiperWrapper.appendChild(swiperSlide3)

        let showcaseSliderImg3 = document.createElement("div")
        showcaseSliderImg3.setAttribute("class","showcase-slider-img")
        swiperSlide3.appendChild(showcaseSliderImg3)
        
        let img3 = document.createElement("img")
        img3.setAttribute("src",item.showimage3)
        showcaseSliderImg3.appendChild(img3)
    })
}
let placeName = document.querySelector(".place-name")
let placeNameRay = document.querySelector(".place-name-ray")

titleDisplay(LSData)
function titleDisplay(data) {
    data.forEach((item)=>{

        placeName.innerText = item.name

        placeNameRay.innerText = item.name
    })
}

const rating = document.querySelector(".showcase-rating")
const price = document.querySelector(".showcase-price")
priceRateDisplay(LSData)
function priceRateDisplay(data) {
    data.forEach((item)=>{

        rating.innerText = item.rating

        price.innerText = item.price
    })
}