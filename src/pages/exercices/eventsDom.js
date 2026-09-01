let btnAjouter = document.querySelector("#ajouter");
let btnSupprimer = document.querySelector("#supprimer");
let btnToggle = document.querySelector("#toggle");
let titre = document.querySelector("h1");

console.log(btnAjouter);
console.log(btnSupprimer);
console.log(btnToggle);

btnAjouter.addEventListener("click", ()=>{
    console.log("test btnAjouter");
    titre.classList.add("bg-accent");
})

btnSupprimer.addEventListener("click", ()=>{
    console.log("test btnSupprimer");
    titre.classList.remove("bg-accent");
})

btnToggle.addEventListener("click", ()=>{
    console.log("test btnToggle");
    if(titre.classList == ""){
        titre.classList.add("bg-accent");
    }else{
        titre.classList.remove("bg-accent");
    }
})

let gagne = document.querySelector(".dollars");
gagne.style.display = "none";



document.body.addEventListener("mouseleave",()=>{
    gagne.style.display = "block";
})

document.body.addEventListener("mouseout",()=>{
    gagne.style.display = "none";
})

let input = document.querySelector("#name");
let password = document.querySelector("#spy");

input.addEventListener("keyup",()=>{
    console.log(input.value);
    password.textContent = input.value;
})

console.log(input);

let inputUser = document.querySelector("#key");
let submitUser = document.querySelector("#submit");

inputUser.addEventListener("keyup",(e)=>{
    if(inputUser.value.length >=5){
        submitUser.disabled ='true';
    }
});

let areaUser = document.querySelector("#areaUser");

areaUser.addEventListener("keyup",()=>{
    localStorage.setItem("myText",areaUser.value);
})
console.log(areaUser);
areaUser.value = localStorage.getItem("myText");