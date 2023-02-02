let details=document.querySelector(".details")
let imgC=document.querySelector(".img-container")
let btn=document.querySelector("user-btn")
let url = "https://random-data-api.com/api/v2/users?response_type=json";

let user=()=>{
    fetch(url)
    .then( (response)=>response.json())
    .then( (data)=>{
        imgC.innerHTML=`<img src=${data.avatar} class="imgp">`
        details.innerHTML= `
        <h2>${data.first_name} ${data.last_name}</h2>
        <h3>${data.employment.title}</h3>
        <h4><i></i>${data.address.city}</h4>
         `

    }
    )
}
window.addEventListener("load",user)
