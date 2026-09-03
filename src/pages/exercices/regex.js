const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
const charDecimal = /\d/;
const charSpecial = /[$&@!]/;

let mail = document.querySelector("#mail");
let psw = document.querySelector("#psw");
let error = document.querySelector("#error");
mail.addEventListener("keyup",()=>{
    console.log(mail.value);
    if (regexMail.test(mail.value)){
        mail.style.color="green";
    } else{
        mail.style.color="red";
    }

})
console.log(regexMail.test(mail.value));
let pswTooLong = "";
let pswTooShort ="";
let specialCharacter ="";
let pswDecimal ="";

psw.addEventListener("keyup",()=>{
    console.log(psw.value.length);
    if(psw.value.length <= 6){
        pswTooLong = " Le mot de passe doit contenir au moins 6 caractères.";
    }else{
        pswTooLong ="";
    } if(psw.value.length > 12){
        pswTooShort = " Le mot de passe ne doit  pas contenir plus de 12 caractères.";
    }else{
        pswTooShort ="";
    }
    if (!charSpecial.test(psw.value)){
         specialCharacter = " Il faut au moins 1 caractère spécial.";
    }else{
        specialCharacter = "";
    }
    if (!charDecimal.test(psw.value)){
         pswDecimal = " Il faut au moins 1 chiffre.";
    }else{
        pswDecimal = "";
    }


    error.textContent = pswTooLong + pswTooShort + specialCharacter + pswDecimal;
})