
let pokemonList = [];
async function getPokemon() {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon");
            const data = await response.json();
            console.log("Post récupéré :", data);
            pokemonList = data.results

            const list = document.querySelector("#pokemonList"); 
            pokemonList.forEach((pokemon) => {
                const li = document.createElement("li");
                li.textContent = pokemon.name;
                list.appendChild(li);
            });
        } catch (error) {
          console.error("Erreur :", error);
        }
      }
      
      getPokemon();

let userList = [];
async function getUser() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            console.log("Post récupéré :", data);
            userList = data;
            const list = document.querySelector("#userList");
            userList.forEach((u) => {
                const li = document.createElement("li");
                li.textContent = "id : " + u.id + " Nom : " + u.name + "Email : " + u.email ;
                list.appendChild(li);
            });
        } catch (error) {
          console.error("Erreur :", error);
        }
      }

      getUser();