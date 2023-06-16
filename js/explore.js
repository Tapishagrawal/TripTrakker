document.addEventListener("DOMContentLoaded", function () {
    var preloader = document.getElementById("preloader");
    preloader.style.display = "block";

    window.addEventListener("load", function () {
        preloader.style.display = "none";
    });
});
let cityData = [
    {
        "name": "Jaipur",
        "image": "https://images.unsplash.com/photo-1599661046289-e31897846e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SmFpcHVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        "description": "Jaipur is the capital city of Rajasthan and known as the 'Pink City.' It offers a vibrant mix of history, culture, and architecture, including the magnificent Amber Fort and Hawa Mahal.",
        "price": 1500,
        "rating": 4.7
    },
    {
        "name": "Varanasi",
        "image": "https://images.unsplash.com/photo-1627894483216-2138af692e32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VmFyYW5hc2l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        "description": "Varanasi, situated on the banks of the Ganges River, is one of the oldest inhabited cities in the world. It is renowned for its spiritual significance, ancient temples, and the mesmerizing Ganga Aarti.",
        "price": 1200,
        "rating": 4.6
    },
    {
        "name": "Mumbai",
        "image": "https://images.unsplash.com/photo-1591014141178-02091240f1c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE11bWJhaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        "description": "Mumbai, the financial and entertainment capital of India, offers a bustling cityscape, iconic landmarks such as the Gateway of India, vibrant markets, and a thriving nightlife.",
        "price": 1800,
        "rating": 4.8
    },
    {
        "name": "Kolkata",
        "image": "https://images.unsplash.com/photo-1536421469767-80559bb6f5e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8S29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        "description": "Kolkata, known as the 'City of Joy,' is renowned for its intellectual heritage, colonial architecture, delicious street food, and cultural festivals like Durga Puja.",
        "price": 1600,
        "rating": 4.5
    },
    {
        "name": "Udaipur",
        "image": "https://images.unsplash.com/photo-1561312514-1d71b2b7e495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        "description": "Udaipur, often called the 'City of Lakes,' offers a romantic setting with its enchanting palaces, serene lakes, and beautiful gardens, including the famous Lake Palace.",
        "price": 1700,
        "rating": 4.7
    },
    {
        "name": "Goa",
        "image": "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R29hfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        "description": "Goa, a beach paradise on the western coast of India, is renowned for its stunning beaches, water sports, vibrant nightlife, and a blend of Indian and Portuguese cultures.",
        "price": 2000,
        "rating": 4.6
    },
    {
        "name": "Agra",
        "image": "https://images.unsplash.com/photo-1591018653367-9c01498b3320?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QWdyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        "description": "Agra is home to the world-famous Taj Mahal, a UNESCO World Heritage Site, along with other architectural marvels like Agra Fort and Fatehpur Sikri.",
        "price": 1900,
        "rating": 4.8
    },
    {
        "name": "Amritsar",
        "image": "https://images.unsplash.com/photo-1588096344356-9b497caeeb64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QW1yaXRzYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        "description": "Amritsar is the spiritual and cultural center of the Sikh religion, featuring the magnificent Golden Temple, Jallianwala Bagh, and the vibrant Wagah Border ceremony.",
        "price": 1400,
        "rating": 4.5
    },
    {
        "name": "Kochi",
        "image": "https://images.unsplash.com/photo-1590123717647-de5b78ed762e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEtvY2hpfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        "description": "Kochi, also known as Cochin, is a coastal city in Kerala, famous for its Chinese fishing nets, historic Fort Kochi, beautiful backwaters, and rich spice trading history.",
        "price": 1700,
        "rating": 4.7
    },
    {
        "name": "Pushkar",
        "image": "https://images.unsplash.com/photo-1538158851102-3fb1f36d910c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHB1c2hrYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        "description": "Pushkar is a small town in Rajasthan known for its sacred Pushkar Lake, Brahma Temple, and the annual Pushkar Camel Fair, attracting tourists and pilgrims alike.",
        "price": 1500,
        "rating": 4.6
    },
    {
        "name": "Shimla",
        "image": "https://images.unsplash.com/photo-1597074866923-dc0589150358?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2hpbWxhfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        "description": "Shimla, the capital of Himachal Pradesh, is a popular hill station nestled in the Himalayas. It offers scenic views, colonial architecture, and a pleasant climate.",
        "price": 1800,
        "rating": 4.8
    },
    {
        "name": "Chennai",
        "image": "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hlbm5haXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        "description": "Chennai, the capital of Tamil Nadu, is a vibrant city known for its rich history, bustling markets, Marina Beach, and the famous Kapaleeshwarar Temple.",
        "price": 1600,
        "rating": 4.5
    },
    {
        "name": "Mysore",
        "image": "https://images.unsplash.com/photo-1580294647332-8a399cd9ed45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TXlzb3JlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        "description": "Mysore, known for its royal heritage, is home to the magnificent Mysore Palace, Chamundi Hill, vibrant silk sarees, and the grand Dasara festival.",
        "price": 1700,
        "rating": 4.7
    },
    {
        "name": "Rishikesh",
        "image": "https://images.unsplash.com/photo-1596021688656-35fdc9ed0274?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UmlzaGlrZXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        "description": "Rishikesh, situated on the banks of the Ganges River, is a renowned spiritual destination known for yoga, meditation, adventure activities, and the famous Laxman Jhula.",
        "price": 1500,
        "rating": 4.6
    },
    {
        "name": "Pondicherry",
        "image": "https://images.unsplash.com/photo-1598792598750-1f0dc619e6a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UG9uZGljaGVycnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        "description": "Pondicherry, also known as Puducherry or just Pondy, showcases French colonial architecture, serene beaches, Auroville Ashram, and a vibrant culinary scene.",
        "price": 1800,
        "rating": 4.8
    },
    {
        "name": "Hyderabad",
        "image": "https://images.unsplash.com/photo-1570795876989-bcec725b8e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SHlkZXJhYmFkfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        "description": "Hyderabad, the 'City of Pearls,' blends the old and the new, featuring iconic landmarks like Charminar, Golconda Fort, delicious biryani, and the tech hub of HITEC City.",
        "price": 1600,
        "rating": 4.5
    },
    {
        "name": "Darjeeling",
        "image": "https://images.unsplash.com/photo-1590256518627-c9f8a6855185?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGFyamVlbGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        "description": "Darjeeling, located in West Bengal, is famous for its tea plantations, the UNESCO-listed Darjeeling Himalayan Railway (Toy Train), and stunning views of Kanchenjunga.",
        "price": 1700,
        "rating": 4.7
    },
    {
        "name": "Jaisalmer",
        "image": "https://plus.unsplash.com/premium_photo-1661953630194-4bef71f0440d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEphaXNhbG1lcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        "description": "Jaisalmer, often called the 'Golden City,' showcases a mesmerizing blend of sandstone architecture, the vast Thar Desert, camel safaris, and the majestic Jaisalmer Fort.",
        "price": 1500,
        "rating": 4.6
    },
    {
        "name": "Kochin",
        "image": "https://images.unsplash.com/photo-1669077411489-aecca1c06d92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S29jaGlufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        "description": "Kochin, also known as Cochin, is a vibrant city in Kerala known for its Chinese fishing nets, historic Fort Kochi, beautiful backwaters, and rich spice trading history.",
        "price": 1800,
        "rating": 4.8
    },
    {
        "name": "Ooty",
        "image": "https://images.unsplash.com/photo-1589136777351-fdc9c9cab193?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T290eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        "description": "Ooty, located in the Nilgiri Hills, is a popular hill station known for its tea gardens, picturesque landscapes, toy train rides, and pleasant weather.",
        "price": 1600,
        "rating": 4.5
    },
    {
        "name": "Jaipur",
        "image": "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SmFpcHVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        "description": "Jaipur is the capital city of Rajasthan and known as the 'Pink City.' It offers a vibrant mix of history, culture, and architecture, including the magnificent Amber Fort and Hawa Mahal.",
        "price": 1700,
        "rating": 4.7
    },
    {
        "name": "Varanasi",
        "image": "https://images.unsplash.com/photo-1627894485677-105070ad8e2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFZhcmFuYXNpfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        "description": "Varanasi, situated on the banks of the Ganges River, is one of the oldest inhabited cities in the world. It is renowned for its spiritual significance, ancient temples, and the mesmerizing Ganga Aarti.",
        "price": 1500,
        "rating": 4.6
    },
    {
        "name": "Mumbai",
        "image": "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE11bWJhaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        "description": "Mumbai, the financial and entertainment capital of India, offers a bustling cityscape, iconic landmarks such as the Gateway of India, vibrant markets, and a thriving nightlife.",
        "price": 1800,
        "rating": 4.8
    },
    {
        "name": "Kolkata",
        "image": "https://images.unsplash.com/photo-1558431382-27e303142255?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8S29sa2F0YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        "description": "Kolkata, known as the 'City of Joy,' is renowned for its intellectual heritage, colonial architecture, delicious street food, and cultural festivals like Durga Puja.",
        "price": 1600,
        "rating": 4.5
    },
    {
        "name": "Udaipur",
        "image": "https://images.unsplash.com/photo-1629210132098-592c636e3d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VWRhaXB1cnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60",
        "description": "Udaipur, often called the 'City of Lakes,' offers a romantic setting with its enchanting palaces, serene lakes, and beautiful gardens, including the famous Lake Palace.",
        "price": 1700,
        "rating": 4.7
    },
    {
        "name": "Goa",
        "image": "https://images.unsplash.com/photo-1587922546307-776227941871?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8R29hfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        "description": "Goa, a beach paradise on the western coast of India, is renowned for its stunning beaches, water sports, vibrant nightlife, and a blend of Indian and Portuguese cultures.",
        "price": 2000,
        "rating": 4.6
    },
    {
        "name": "Agra",
        "image": "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEFncmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        "description": "Agra is home to the world-famous Taj Mahal, a UNESCO World Heritage Site, along with other architectural marvels like Agra Fort and Fatehpur Sikri.",
        "price": 1900,
        "rating": 4.8
    },
    {
        "name": "Amritsar",
        "image": "https://images.unsplash.com/photo-1647588513660-6f8c1524adf8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW1yaXRzYXIlMjBnb2xkZW4lMjB0ZW1wbGUlMjBndXJ1ZHdhcmElMjBwdW5qYWJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        "description": "Amritsar is the spiritual and cultural center of the Sikh religion, featuring the magnificent Golden Temple, Jallianwala Bagh, and the vibrant Wagah Border ceremony.",
        "price": 1400,
        "rating": 4.5
    },
    {
        "name": "Kochi",
        "image": "https://images.unsplash.com/photo-1558013400-b724200f9c39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a29jaGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
        "description": "Kochi, also known as Cochin, is a coastal city in Kerala, famous for its Chinese fishing nets, historic Fort Kochi, beautiful backwaters, and rich spice trading history.",
        "price": 1700,
        "rating": 4.7
    },
    {
        "name": "Rishikesh",
        "image": "https://images.unsplash.com/photo-1570804485046-b5b8d795dc5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmlzaGlrZXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
        "description": "Rishikesh, situated on the banks of the Ganges River, is a renowned spiritual destination known for yoga, meditation, adventure activities, and the famous Laxman Jhula.",
        "price": 1500,
        "rating": 4.6
    },
    {
        "name": "Pondicherry",
        "image": "https://images.unsplash.com/photo-1621831714462-bec8edc4d0ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        "description": "Pondicherry, also known as Puducherry or just Pondy, showcases French colonial architecture, serene beaches, Auroville Ashram, and a vibrant culinary scene.",
        "price": 1800,
        "rating": 4.8
    }
]
let exploreCardCont = document.querySelector(".explore-card-container")

let sortPrice = document.querySelector("#sort-by-price")
sortPrice.addEventListener("change", function(){
    let sortedData;
    if (sortPrice.value === "") {
        sortedData = cityData.slice(); 
    } else {
        if (sortPrice.value === "high") {
            sortedData = cityData.slice().sort((a, b) => b.price - a.price); 
        } else if (sortPrice.value === "low") {
            sortedData = cityData.slice().sort((a, b) => a.price - b.price); 
        }
    }

    display(sortedData);
})

let sortRating = document.querySelector("#sort-by-rating")
sortRating.addEventListener("change", function(){
    let sortedData;
    if (sortRating.value === "") {
        sortedData = cityData.slice(); 
    } else {
        if (sortRating.value === "high") {
            sortedData = cityData.slice().sort((a, b) => b.rating - a.rating); 
        } else if (sortRating.value === "low") {
            sortedData = cityData.slice().sort((a, b) => a.rating - b.rating); 
        }
    }

    display(sortedData);
})

display(cityData)
function display(data) {
    exploreCardCont.innerHTML=""
    data.forEach((item) => {
        let cardEx = document.createElement("div")
        cardEx.setAttribute("class", "card-ex")

        // img start
        let exCardImg = document.createElement("div")
        exCardImg.setAttribute("class", "ex-card-img")

        let img = document.createElement("img")
        img.setAttribute("src", item.image)
        exCardImg.appendChild(img)
        // img End

        // name and description start
        let exploreContant = document.createElement("div")
        exploreContant.setAttribute("class", "explore-contant")

        let name = document.createElement("h4")
        name.innerText = item.name

        let desc = document.createElement("p")
        desc.innerText = item.description
        exploreContant.append(name, desc)
        let priceRatingCont = document.createElement("div")
        priceRatingCont.setAttribute("class", "price-rating-cont")
        let price = document.createElement("p")
        let rating = document.createElement("p")
        price.innerText = "RS. " + item.price
        rating.innerText = item.rating
        priceRatingCont.append(price, rating)
        // name and description end

        // heart and button Start
        let exploreBtnCont = document.createElement("div")
        exploreBtnCont.setAttribute("class", "explore-btn-cont")

        let heart = document.createElement("i")
        heart.setAttribute("class", "fa-sharp fa-regular fa-heart")


        let kowBtn = document.createElement("a")
        kowBtn.innerText = "Know More"
        kowBtn.setAttribute("class", "btn")
        exploreBtnCont.append(heart, kowBtn)
        exploreContant.append(priceRatingCont, exploreBtnCont)
        // heart and button end

        cardEx.append(exCardImg, exploreContant)
        exploreCardCont.appendChild(cardEx)

        heart.addEventListener("click",()=>{
            heart.classList.toggle("fa-solid")
        })
    })
}
let serInp = document.getElementById("searchInp")
serInp.addEventListener("input",()=>{
    let filtered =cityData.filter((ele)=>{
        if(ele.name.toUpperCase().includes(serInp.value.toUpperCase())===true){
            return ele
        }
    })
    display(filtered)
    if(filtered.length ===0){
        exploreCardCont.innerText = "No Data Found!"
    }
})