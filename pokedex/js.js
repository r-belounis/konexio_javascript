// Pokedex list fetch
// ------------------
// Ce js va construire notre pokedex en utilisant l'api de pokeapi.co, pour retourner une liste
// des 151 premiers pokemons d'une part, et d'un autre côté les caractéristiques de chaque pokemon.

console.log("Gotta catch'em all !")

// Configuration
// -------------
// Container pour rendre la liste des pokemons
const cardContainer = document.getElementById('pokemon-list-container');
const statsContainer = document.getElementById('pokemon-detail-container');

// Rendu HTML/DOM
// --------------
$(function() {

    // Container de gauche
    // -------------------
    // Fonction pour fetch/rendu de la liste des 151 de la première génération des Pokemons
    fetchPokemonList = async () => {

        // Async fetch depuis pokeapi.co
        const urlPokemonList = `https://pokeapi.co/api/v2/pokemon?limit=151`;
        const res = await fetch(urlPokemonList);
        const data = await res.json();

        // console.log('Ceci est le résultat du fetch de "urlPokemonList"', data);

        // Fetch des données requises et stockage des résultats
        const pokemonList = data.results.map((data, index) => ({
            name: data.name,
            id: index + 1,
            image: `https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`,
            types: data.url.types
        }));

        // console.log('Ceci est le résultat du mapping de "pokemonList"', pokemonList);

        // Mapping et rendu de la liste au container principal
        const pokemonListToHTML = pokemonList.map(display =>
            `
            <div class="card mt-2 mb-2 align-items-center">
                <img class="card-img-top w-50" src="${display.image}" alt="${display.name}">
                <div class="card-body">
                    <h5 class="card-title">#${display.id}. ${display.name}</h5>
                    <button id="${display.id}" class="btn btn-primary" onclick="fetchPokemonStats(${display.id})">Voir stats</button>
                </div>
            </div>
            `
        ).join("");

        // Rendu DOM de la liste
        $(cardContainer).html(pokemonListToHTML);
    };

    // Container de droite
    // -------------------
    // Fonction pour fetch les stats et autres détails du pokemon sélectionné
    fetchPokemonStats = async id => {

        // Variables pour appeler notre url et stocker les informations
        const urlStats = `https://cors-anywhere.herokuapp.com/http://pokeapi.co/api/v2/pokemon/${id}`;
        const resStats = await fetch(urlStats);
        const stats = await resStats.json();

        // console.log('Ceci est le résultat du fetch de "urlPokemonId"', stats)

        renderPokemonStats(stats)
    }

    renderPokemonStats = (data) => {

        // console.log('Ceci est le résultat de "data" après avoir cliqué sur le bouton', data)

        // Pour récupérer le type du pokemon sélectionné
        const statsToHTML =
            `
            <div class="media">
                <div class="media-body">
                    <h5 class="mt-0">${data.name}</h5>
                    <img class="card-img-top w-50" src="${data.sprites.other.dream_world.front_default}" alt="${data.name}">
                    <p>Stats:<p>
                    <p>${data.stats.map((i) => i.stat.name)}</p>
                    <p>${data.stats.map((i) => i.base_stat)}<p>
                    <p>Types: ${data.types.map((i) => i.type.name)} | Height:</small> ${data.height} | Weight: ${data.weight}</p>
                </div>
            </div>
            `

        $(statsContainer).html(statsToHTML);
    }

// On envoit nos Pokemons :)
fetchPokemonList();
});