let contenu = document.getElementById("contenu");
const urlFetch = api+"api/movies"
const movieFetch = fetch(urlFetch);
let htmlElements = "";
movieFetch
    .then(function (res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then(function (data) {
        data.forEach(film => {
            console.log(film)
            console.log(film.realisateur)

            contenu.insertAdjacentHTML("beforeend", `
            <div class="col-lg-3 col-md-5 col-11 offset-1" >
                <div class="card" style="width: 18rem;">
                    <img src="${film.logo}" class="card-img-top" alt="logo du film">
                    <div class="card-body">
                    <h2 class="card-title"> <span class="rouge">Titre:</span> ${film.titre}</h2>
                    <h5 class="card-text"> <span class="rose">Realisateur: </span> ${film.realisateur}</5>
                    <h5 class="card-text"> <span class="vert">Durée :</span> ${film.duree}</h5>
                    <h5 class="card-text descrip "> <span class="bleu">Description du Film :</span> ${film.description}</h5>
                    <h5 class="card-text"> <span class="violet">Acteur Principal : </span>${film.acteurprincipal}</h5>
                    <h5 class="card-text">Pourcentage Visionné Du Film: ${pourcentagevisionnage(film.dureeVisionee, film.duree)}%</h5>
                    
                   <a href="fiche_video.html?id=${film._id}">voir la fiche</a>
                   
               
                </div>
            </div>
 `);
        });
    })

    .catch(function (err) {
        console.log(err);
    });