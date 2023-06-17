
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