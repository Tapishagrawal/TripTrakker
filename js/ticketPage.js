const LsData = JSON.parse(localStorage.getItem("indicard-data")) || []

const formData = document.querySelector("form")

let price = document.querySelector("#tickt-price")
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