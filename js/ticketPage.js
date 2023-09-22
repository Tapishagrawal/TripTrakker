// lgo in logout Start
let flage = localStorage.getItem("Islogin")
const bookBtn = document.querySelector("nav>div:last-child .btn")
const wisitHeartBtn = document.querySelector("nav .fa-sharp")

if(flage === "true"){
    bookBtn.style.display = "initial"
    wisitHeartBtn.style.display = "initial"
}

// lgo in logout Start

// mobile manu bar function start
const menu = document.querySelector(".mobile-manu>i")
    const nevMenu = document.querySelector(".nav-manu")
    menu.addEventListener("click", () =>{
        menu.classList.toggle("fa-x")
        nevMenu.classList.toggle("open")
    })
// mobile manu bar function End

const LsData = JSON.parse(localStorage.getItem("indicard-data")) || []

const formData = document.querySelector("form")

// let price = document.querySelector("#tickt-price")
formData.addEventListener("submit", (e) =>{
    e.preventDefault();
    // let form = {
    //     name:formData.placeName.value,
    //     numberGuest:formData.numberGuest.value,
    //     arriDate:formData.arriDate.value,
    //     leavDate:formData.leavDate.value,
    //     mobNumber:formData.mobNumber.value,
    //     email:formData.email.value,
    // }
    
    swal("Good job!", "Your Ticket added successfully!", "success");
})


window.addEventListener("scroll",()=>{
    setTimeout(()=>{
        var nav = document.querySelector("nav");
        nav.classList.toggle("sticky", window.scrollY > 0)
    },200)
})