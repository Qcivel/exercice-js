class Character{
    constructor(name){
        this.name = name;
        this.hp = 100;
        this.maxHp = 100;
        this.stamina = 50;
        this.mp = 50;
        this.attackPower = 15;
        this.magicPower = 25;
    }

    attack(target) {
        if(this.stamina >= 30){
            console.log(this.name + " Lance une attaque physique !");
            this.stamina -= 30
            console.log("l'endurance de : " + this.name + " est de :" + this.stamina);
            target.hp -= this.attackPower;
            console.log(target.name + " a perdu : " + this.attackPower + "Point de vie !");
        }else{
            console.log("Endurance inssufisante !! l'attaque physique à echoué !! ");
        }
    }

    attackMagique(target){
        if(this.mp >=15){
            console.log(this.name + " Lance une attaque magique !")
            this.mp -= 15;
            console.log("le mana de : " + this.name + " est de :" + this.mp);
            target.hp -= this.magicPower;
            console.log(target.name + " a perdu : " + this.magicPower + "Point de vie !");
        }else{
            console.log("Mana insuffisant !! l'attaque magique à echoué !!");
        }
    }

    soin(amount){
        if (amount.hp < this.maxHp ){
            amount.hp += 10;
            console.log(target.name + "Se soigne de :" + 10 + "points de vie");
        }
    }
}


const hero = new Character("Aragon");
const boss = new Character("Gritch le Troll");

console.log("--- ⚔️ LE COMBAT COMMENCE ⚔️ ---");

console.log(`${hero.name} arrive face à ${boss.name} !`);
console.log("----------------------------------");

// 2. Tour 1 : Le héros attaque physiquement
hero.attack(boss);

// 3. Tour 2 : Le héros utilise la magie
hero.attackMagique(boss);

// 4. Tour 3 : Le monstre réplique (Test de l'interaction entre deux instances)
// On utilise le boss pour attaquer le héros
boss.attack(hero);

// 5. Tour 4 : Le héros est affaibli, il doit se soigner
console.log("\n--- ⚠️ Le héros est mal en point ! ---");
hero.soin(30);

// 6. Tour 5 : Tentative d'attaque magique alors qu'il n'a presque plus de mana
// (On va forcer une grosse dépense pour tester la limite)
console.log("\n--- 🪄 Tentative de sort ultime ---");
hero.attackMagique(boss); // Doit fonctionner
hero.attackMagique(boss); // Doit échouer (plus de MP)

// 7. Tour 6 : Tentative d'attaque physique alors qu'il n'a plus de stamina
console.log("\n--- 🏃 Tentative d'attaque épuisée ---");
hero.attack(boss); // Doit fonctionner
hero.attack(boss); // Doit échouer (plus de stamina)

// 8. Résultat Final
console.log("----------------------------------");
console.log(" FIN DU COMBAT ");
console.log(`${hero.name} Statut final -> HP: ${hero.hp}/${hero.maxHp} | Stamina: ${hero.stamina} | MP: ${hero.mp}`);
console.log(`${boss.name} Statut final -> HP: ${boss.hp}/${boss.maxHp}`);