let videotheque = {

    titre : "jason bourne",
    realisateur : "alex murphy",
    duree : 120,
    acteurprincipal : "lou vargas",
    description: "film d'action", 

}

class film {
    constructor(titre, realisateur, duree, acteurprincipal, description){
        this.titre = titre;
        this.realisateur = realisateur;
        this.duree = duree;
        this.acteurprincipal=acteurprincipal;
        this.description = description;

    }
}
let film1 = new film("cosmos 1999", "hector back", 145, "bruce willis", "science fiction");
console.log(film1);

let film2 = new film( "air force one", "james hok", 123, "harrison ford", "action");
console.log(film2);

let film3 = new film("guet append","micheal jef",111,"alex baldwine", "action");
console.log(film3);

let film4 = new film("forest gump","kolen hak",180,"tom hanks","drama");
console.log(film4);

let film5 = new film("les legendes d'automne","hh hug",185,"bravepitt", "drame");
console.log(film5);

let film6 = new film("gladiators","ridley scott","russel crow", 155, "historique");
console.log(film6);

let toutelavideotheque = [];

toutelavideotheque = [
film1,film2,film3,film4,film5,film6
];
console.log(toutelavideotheque);

let combiendefilms = toutelavideotheque.length;
console.log(`il y'a ${combiendefilms} films dans ma videotheque`);

let nouveautableau = [
    "cosmos 1999 ",  "air force one ", "guet append ", "les legendes d'automnes ","gladiator"
];
console.log(`voici tout les titres de mes films :${nouveautableau}`);








