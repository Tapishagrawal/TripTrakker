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