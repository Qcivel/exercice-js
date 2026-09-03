class IMC{

    constructor(nom,poids,taille){
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
    }

    calculIMC(){
        return (this.poids/(this.taille**2)).toFixed(2);
    }

    display(){
        console.log(this.nom + "(" + this.poids + "kg" + ", " + this.taille +"m"+ ")" + "a un IMC de : " + this.calculIMC())
    }
}

let list = [
    new IMC("Sébastien Chabal",135,1.7),
    new IMC("Escaladeuse",45, 1.68),
    new IMC("JOJO",300, 2),
    new IMC("Gontrand",90, 1.75),
    new IMC("Colonel Clock",200, 1.75),
    new IMC("Josiane de la Vega",99, 1.55),
    new IMC("Josiane de la Vega",95, 1.78),
]

list.forEach((e)=>{
    e.display();
})

