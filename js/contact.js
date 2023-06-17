// mobile manu bar function start
const menu = document.querySelector(".mobile-manu>i")
    const nevMenu = document.querySelector(".nav-manu")
    menu.addEventListener("click", () =>{
        menu.classList.toggle("fa-x")
        nevMenu.classList.toggle("open")
    })
// mobile manu bar function End

// lgo in logout Start
let flage = localStorage.getItem("Islogin")
const bookBtn = document.querySelector("nav>div:last-child .btn")
const loginBtn = document.querySelector("#btn-login")
const logOutBtn = document.querySelector("#btn-logout")
if(flage === "true"){
    bookBtn.style.display = "initial"
    logOutBtn.style.display = "initial"
    loginBtn.style.display = "none"
}
logOutBtn.addEventListener("click",()=>{
    localStorage.removeItem("Islogin")
    bookBtn.style.display = "none"
    logOutBtn.style.display = "none"
    loginBtn.style.display = "initial"
})
// lgo in logout Start