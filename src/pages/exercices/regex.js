const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
const charDecimal = /\d/;
const charSpecial = /[$&@!]/;

let mail = document.querySelector("#mail");

mail.addEventListener("keyup",()=>{
    console.log(mail.value);
    if (regexMail.test(mail.value)){
        mail.style.color="green";
    } else{
        mail.style.color="red";
    }

})
console.log(regexMail.test(mail.value));

