let titre = document.querySelector("h1");
console.log(titre);
let paragraphe = document.querySelector("p");
let paragraphe2 = document.querySelector("#paragraphe");





titre.textContent= "Bonjour";

paragraphe.textContent = "Je suis un texte";
paragraphe2.textContent = "Je suis un autre texte";


paragraphe.style.color="red";


const userData = {
      name: 'John delavega',
      email: 'john.doe@example.com',
      age: 25,
      dob: '08/02/1989',
      active: true,
      img: 'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
    };

let div = document.querySelector(".maDiv");
console.log(div);

let nameUser = document.createElement("p");
nameUser.textContent = userData.name;
div.append(nameUser);

let emailUser = document.createElement("p");
emailUser.textContent = userData.email;
div.append(emailUser);

let ageUser = document.createElement("p");
ageUser.textContent = userData.age;
div.append(ageUser);

let dobUser = document.createElement("p");
dobUser.textContent = userData.dob;
div.append(dobUser);

if(userData.active == true){
    let activeUser = document.createElement("p");
    activeUser.textContent = "Utilisateur connecté";
    div.append(activeUser)
}

let monImage = document.createElement("img");
monImage.setAttribute("src",userData.img);
monImage.src = userData.img;
div.append(monImage);

