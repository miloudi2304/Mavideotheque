const myMovie = new URLSearchParams(window.location.search).get("id");
console.log(myMovie);

const movieFetch2 = fetch(`http://localhost:3000/api/movies/${myMovie}`);

movieFetch2
    .then(function (res) {
        if (res.ok) {
            return res.json();
        }
    })
    .then((film) => {

        contenu = document.getElementById("contenu");

        contenu.insertAdjacentHTML("beforeend", `
       <div class="col-3 offset-1" >
            <div class="card" style="width: 18rem;">
                <img src="${film.logo}" class="card-img-top" alt="logo du film">
                    <div class="card-body">
                        <h2 class="card-title"> <span class="rouge">Titre:</span> ${film.titre}</h2>
                        <h5 class="card-text"> <span class="rose">Realisateur: </span> ${film.realisateur}</5>
                        <h5 class="card-text"> <span class="vert">Durée :</span> ${film.duree}</h5>
                        <h5 class="card-text descrip "> <span class="bleu">Description du Film :</span> ${film.description} ...</h5>
                        <h5 class="card-text"> <span class="violet">Acteur Principal : </span>${film.acteurprincipal}</h5>
                        <h5 class="card-text">pourcentage visionné : ${pourcentagevisionnage(film.dureeVisionee,film.duree)}%</h5>
                        <a href="index.html">Retour a la page principale</a>
                    </div>
            </div>
        </div>    

    `);
        console.log(movie);

    })

    .catch(function (err) {
        console.log(err);
    });