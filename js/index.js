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

// Testimonial Start
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    loop:true,
});
// Testimonial End

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

// mobile manu bar function start
const menu = document.querySelector(".mobile-manu>i")
    const nevMenu = document.querySelector(".nav-manu")
    menu.addEventListener("click", () =>{
        menu.classList.toggle("fa-x")
        nevMenu.classList.toggle("open")
    })
// mobile manu bar function End