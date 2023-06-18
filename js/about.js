// lgo in logout Start
let flage = localStorage.getItem("Islogin")
const bookBtn = document.querySelector("nav>div:last-child .btn")
const loginBtn = document.querySelector("#btn-login")
const logOutBtn = document.querySelector("#btn-logout")
const wisitHeartBtn = document.querySelector("nav .fa-sharp")

if(flage === "true"){
    bookBtn.style.display = "initial"
    logOutBtn.style.display = "initial"
    wisitHeartBtn.style.display = "initial"
    loginBtn.style.display = "none"
}
logOutBtn.addEventListener("click",()=>{
    localStorage.removeItem("Islogin")
    bookBtn.style.display = "none"
    logOutBtn.style.display = "none"
    wisitHeartBtn.style.display = "none"
    loginBtn.style.display = "initial"
})
// lgo in logout Start

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

window.addEventListener("scroll",()=>{
    setTimeout(()=>{
        var nav = document.querySelector("nav");
        nav.classList.toggle("sticky", window.scrollY > 0)
    },200)
})