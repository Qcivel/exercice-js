
async function getChuckNorris() {
        try {
            const response = await fetch("https://api.chucknorris.io/jokes/random");
            const data = await response.json();
            console.log("Post récupéré :", data);
            
            const blague = document.querySelector("#chuck");
            
            blague.textContent = data.value;
                
            
        } catch (error) {
          console.error("Erreur :", error);
        }
      }

      getChuckNorris();