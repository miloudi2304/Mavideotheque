let videotheque = {

    titre : "jason bourne",
    realisateur : "alex murphy",
    dureeTOtale : 120,
    acteurprincipal : "lou vargas",
    description: "film d'action", 

}

class film {
    constructor(titre, realisateur, description, duree, acteurprincipal, logo){
        this.titre = titre;
        this.realisateur = realisateur;
        this.logo = logo;
        this.duree = duree;
        this.acteurprincipal = acteurprincipal;
        this.description = description;
        this.id = _id;
   
    }

}

const films=[
    new film("Cosmos 1999", "Gerry Anderson ET Sylvia Anderson", 1975, 52, "Martin Landau", "est une série télévisée de science-fiction britannique en 48 épisodes de 52 minutes, créée par Gerry Anderson et Sylvia Anderson et diffusée entre le 4 septembre 1975 et le 12 novembre 1977 sur ITV et au Canada sur le réseau CBC.", 22, "assets/img/cosmos1999.jpg"),
    new film("Air Force One", " Wolfgang Petersen",1997, 124, "Harrison Ford", "Air Force One partout et au Québec est un thriller politique germano-américain","assets/img/airforceone.jpg"),
    new film("Guet Appens","Roger Donaldson",1994,116,"Alec Baldwine", "Guet-apens ou Le guet-apens au Québec (The Getaway) est un film américain réalisé par Roger Donaldson, sorti en 1994. Il s'agit d'une adaptation du roman The Getaway de Jim Thompson publié en 1958 aux États-Unis1. Le roman avait déjà été adapté au cinéma en 1972 avec Guet-apens" ,56,"assets/img/guetappens.jpg",),
    new film("Forest Gump","Robert Zemeckis",1994, 142,"Tom Hanks","Forrest Gump est une comédie dramatique américaine de Robert Zemeckis, sortie en 1994, adaptation du roman du même nom de l'écrivain Winston Groom, paru en 1986.",47,"assets/img/forestgump.jpg",),
    new film("Les Legendes d'Automne","Edward Zwick",1995,133,"Brad Pitt, Anthony Hopkins, Aidan Quinn", "Dans le Montana dans les années 1960, un vieil indien raconte l'histoire de la famille Ludlow.Trois frères ont été élevés dans un ranch au cœur du Montana par leur père William Ludlow, un colonel en retraite qui a quitté l’armée car il ne supportait plus la façon dont le « gouvernement »traitait les Amérindiens : il y a Alfred, l’aîné, très sérieux et paraissant plus âgé qu'il ne l'est, Samuel, le plus jeune, dont les frères sont prêts à tout pour le protéger et Tristan, un garçon sauvage qui a grandi selon les rites indiens de la chasse. Ce dernier fera une dangereuse rencontre avec un",62,"assets/img/legendesdautomne.jpg"),
    new film("Gladiators","Ridley Scott",155, 171,"Russel Crow","L'intrigue raconte ainsi la chute du général romain Maximus Decimus (Russell Crowe), destiné à devenir le successeur de Marc Aurèle (Richard Harris), avant que l'empereur ne soit assassiné et le général brutalement trahi et laissé pour mort par l'ambitieux et maléfique Commode (Joaquin Phoenix) qui en profite pour revêtir la pourpre. Maximus, dont la famille a été massacrée, va devenir un esclave gladiateur, conquérir le cœur du peuple romain par ses talents de combattant dans l'arène du Colisée et finalement affronter Commode dans un ultime combat. Connie Nielsen, Ralf Moeller, Djimon Hounsou et Derek Jacobi font aussi partie de la distribution.",26,"assets/img/gladiators.jpg"),

];



/*
let combiendefilms = toutelavideotheque.length;
console.log(`il y'a ${combiendefilms} films dans ma videotheque`);

let nouveautableau = [
    "cosmos 1999",  "air force one", "guet append", "les legendes d'automnes", "gladiator"
];
console.log(`voici tout les titres de mes films :${nouveautableau}`);*/


//for( let i=0; i<toutelavideotheque.length; i++)

for (let listedefilm of films) {
console.log(`le film a pour titre : ${listedefilm.titre}`);
console.log(`le nom du realisateur est : ${listedefilm.realisateur}`);
console.log(`Sa durée est de : ${listedefilm.duree}`);
console.log(`Voici la description du film : ${listedefilm.description}`);
console.log(`et l'acteur principal est : ${listedefilm.acteurprincipal}`);
console.log("==============================================================");
}
let contenu = document.getElementById("contenu");
for (let film of films){
    contenu.insertAdjacentHTML("beforeend",`

    <div>
        <img src="${film.logo}" alt="logo de ${film.logo}"></img>
            <ul>
                <li><p>le titre du film est: ${film.titre}</p></li>
                <li><p>le realisateur est : ${film.realisateur}</p></li>
                <li><p>la durée du film est de : ${film.duree}</p></li>
                <li><p>Acteur principal est : ${film.acteurprincipal}</p></li>
                <li><p>description est : ${film.description}</p></li>
            </ul>
    </div>
    `);
}

 contenu = document.getElementById("contenu");
for (let film of films){
    contenu.insertAdjacentHTML("beforeend",`
       <div class="col-3 offset-1" >
            <div class="card" style="width: 18rem;">
                <img src="${film.logo}" class="card-img-top" alt="logo du film">
                    <div class="card-body">
                        <h2 class="card-title"> <span class="rouge">Titre:</span> ${film.titre}</h2>
                        <h5 class="card-text"> <span class="rose">Realisateur: </span> ${film.realisateur}</5>
                        <h5 class="card-text"> <span class="vert">Durée :</span> ${film.duree}</h5>
                        <h5 class="card-text descrip "> <span class="bleu">Description du Film :</span> ${film.description} ...</h5>
                        <h5 class="card-text"> <span class="violet">Acteur Principal : </span>${film.acteurprincipal}</h5>
                      
                    </div>
            </div>

    
    `);
 
   }

//const pourCentageParfilm =  (${film.duree / 100})

