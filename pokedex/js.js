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
const pokemonSingleID = [];

// Rendu HTML/DOM
// --------------
// Container de gauche
// -------------------
// Fonction pour fetch/rendu de la liste des 151 de la première génération des Pokemons
const fetchPokemonList = async (pokemonList) => {
    // Async fetch depuis pokeapi.co
    const urlPokemonList = `https://pokeapi.co/api/v2/pokemon?limit=151`;
    const res = await fetch(urlPokemonList);
    const data = await res.json();

    console.log('Ceci est le résultat du fetch de "urlPokemonList"', data);

    // Fetch des données requises et stockage des résultats
    pokemonList = data.results.map((data, index) => ({
        url: data.url,
        name: data.name,
        id: index + 1,
        image: `https://pokeres.bastionbot.org/images/pokemon/${index + 1}.png`
    }));

    console.log('Ceci est le résultat du mapping de "pokemonList"', pokemonList);

    // Appel de la fonction 'displayPokemon' pour rendre la liste des Pokemons dans le DOM
    displayPokemonList(pokemonList);
};

// Fonction pour montrer dans le container de gauche, chaque Pokemon avec le component 'Card' de bootstrap
const displayPokemonList = pokemonList => {
    // Mapping et rendu de la liste au container principal
    const pokemonListToHTML = pokemonList.map(display =>
        `
        <div class="card mt-2 mb-2 align-items-center">
            <img class="card-img-top w-50" src="${display.image}" alt="${display.name}">
            <div class="card-body">
                <h5 class="card-title">#${display.id}. ${display.name}</h5>
                <a id="${display.id}" class="btn btn-primary" onclick="displayPokemonStatsPopup()">Voir stats</a>
            </div>
        </div>
        `
    ).join("");

    // Rendu DOM de la liste
    cardContainer.innerHTML = pokemonListToHTML;
}

// Container de droite
// -------------------
// Fonction pour fetch les stats et autres détails du pokemon sélectionné
const fetchPokemonStats = async (pokemonID) => {

    // Async fetch depuis pokeapi.co
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonID.toString()+'/');
    const data = await res.json();
    pokemonSingleID.push(data);

    console.log(pokemonSingleID);

    // Appel de la fonction 'displayPokemonStatsPopup' pour rendre les stats de chaque Pokemon
    displayPokemonStatsPopup(pokemonID.url);
}

//  Fonction pour montrer dans le container de droite, chaque stats du Pokemon sélectionné
const displayPokemonStatsPopup = (pokemonStats) => {

    // Pour récupérer le type du pokemon sélectionné
    // const type = pokemonStats.types.map(type => type.type.name).join(" ");
    const pokemonStatsToHTML =
        `
        <div class="media">

            <div class="media-body">
                <h5 class="mt-0">${pokemonStats.name}</h5>
                <p><small>Type: ${pokemonStats.types} | Height:</small> ${pokemonStats.height} | Weight: ${pokemonStats.weight}</p>
            </div>
        </div>
        `;

    statsContainer.innerHTML = pokemonStatsToHTML;
}

// On envoit nos Pokemons :)
fetchPokemonList();
fetchPokemonStats();