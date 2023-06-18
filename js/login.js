// hide show password function Start
const pass = document.querySelector("#password")
const hideEye = document.querySelectorAll(".fa-eye-slash")
hideEye.forEach((i) => {
    i.addEventListener("click", () => {
        if (pass.type === "password") {
            pass.type = "text"
        } else {
            pass.type = "password"
        }
        if (i.classList[1] === "fa-eye-slash") {
            i.classList.remove("fa-eye-slash")
            i.classList.add("fa-eye")
        } else {
            i.classList.remove("fa-eye")
            i.classList.add("fa-eye-slash")
        }
    })
})
// hide show password function End

// form Data start
let formLocalData = JSON.parse(localStorage.getItem("form-data")) || []
let form = document.querySelector("#form-container")
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let username = form.userName.value;
    let password = form.password.value;

    let isLoggedIn = false;

    for (let i = 0; i < formLocalData.length; i++) {
        if (username === formLocalData[i].useId) {
            if (password === formLocalData[i].pass) {
                isLoggedIn = true;
                break;
            } else {
                swal("Wrong password!", "", "error");
                return; 
            }
        }
    }

    if (isLoggedIn) {
        swal("Login successful!", "Welcome to TrepTrekker","success");
        setTimeout(()=>{
            window.location.href = "index.html";

        },500)
        localStorage.setItem("Islogin","true")
    } else {
        swal("Invalid username!", "", "error");
    }
});
// form Data End

const button = document.querySelector(".button");
    button.addEventListener("click", (e) => {
        e.preventDefault;
        button.classList.add("animate");
        setTimeout(() => {
            button.classList.remove("animate");
        }, 600);
    });
