
class vehicule {

    constuctor(couleur ,roues ,marque ) {
    this.couleur = couleur;
    this.roues = roues;
    this.marque = marque;

    };
    demarrer() {
        console.log("la voiture est en route");
    };
    arreter() {
        console.log("la voiture est a l'arrêt");
    };
    fiche() {
        return"coleur: " + this.couleur + ", Nombres de roues: " +
            this.roues + ", La marque " + this.marque;
    };
}

let engine = new vehicule('rouge' ,'4' ,'ford');

console.log(engine.fiche);
engine.demarrer();
engine.arreter();

//velo

class velo extends vehicule {

    constructor(couleur ,roues ,marque ,rayon ,typePeinture) {
        super(couleur ,roues ,marque);
        this.rayon = rayon;
        this.typePeinture = typePeinture;
    };
    monter() {
        console.log("je suis monter sur le vélo")
    };
}

let bike = new velo('vert', '2' ,'bitwin' ,'22pouce' ,'mat');

console.log(bike.fiche);
bike.monter();

//voiture
class voiture extends vehicule {

    constructor(couleur ,roues ,marque ,assurances ,proprietaire) {
        super(couleur ,roues ,marque);
        this.assurances = assurances;
        this.proprietaire = proprietaire;
    };
    laveer() {
        console.log("la voiture et bonne a laver")
    };
}



let car = new voiture('bleu' , '4' , 'citroen' , 'jantes alu' , 'sombre');

car.laver();
console.log(car);
console.log(car.fiche);