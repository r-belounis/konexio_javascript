const urlPokemonList = `https://pokeapi.co/api/v2/pokemon?limit=151`;

// Fetch liste des 151 pokemons (pokapi.co)
fetch(urlPokemonList)
    .then((resp) => resp.json())
    .then(function(data) {
    let pokemons = data.results;
    return pokemons.map(function(pokemonList, pokemonRange = 151) {

        // petite boucle pour changer l'index du listing des images des pokemons
        for(id = 0; id <= pokemonRange; id++) {
            id = id++;
        }

        // Création d'éléments
        let divCol = createElement('div'),
            divCard = createElement('div'),
            pictureImg = createElement('img'),
            divCardBody = createElement('div'),
            h5 = createElement('h5'),
            button = createElement('a');

        // Rajouter des classes aux éléments
        divCol.classList.add("col", "pokemon-file");
        divCard.classList.add("card", "align-items-center");
        pictureImg.classList.add("picture");
        divCardBody.classList.add("card-body");
        h5.classList.add("card-title");
        button.classList.add("btn", "btn-primary");

        // Retourne elements à html
        h5.innerHTML = `${pokemonList.name}`;
        pictureImg.src = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
        button.innerHTML = 'Voir stats';

        // Structure html
        appendDiv(cardContainer, divCol); // <- 1er à apparaitre
        appendDiv(divCol, divCard);
        appendDiv(divCard, pictureImg);
        appendDiv(divCard, divCardBody);
        appendDiv(divCardBody, h5);
        appendDiv(divCardBody, button); // <- Dernier à apparaitre

        // Boutton stats - event pour fetch l'image et les informations du pokemon sélectionné
        // button.addEventListener("click", function(type, stats){

        // });
    })
})
.catch(function(error) {
    console.log(error);
});