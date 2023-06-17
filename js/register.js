const pass = document.querySelector("#res-Pass")
    const comPass = document.querySelector("#res-conFormPass")
    let hideEye = document.querySelectorAll(".fa-eye-slash");
    hideEye.forEach((i)=>{
        i.addEventListener("click",()=>{
            if(comPass.type=="password"){
                pass.type="text"
                comPass.type="text"

            }else{
                pass.type="password"
                comPass.type="password"

            }
            if(i.classList[1]=="fa-eye-slash"){
                i.classList.remove("fa-eye-slash")
                i.classList.add("fa-eye")
            }else{
                i.classList.add("fa-eye-slash")
                i.classList.remove("fa-eye")
            }
        })
    })