async function
    getAllPokemon() {
    let url = "https://pokeapi.co/api/v2/pokemon/?limit=50&offset=50";
    try {
        let response = await fetch(url);
        let result = await response.json();
        displayAllPokemon(result);
    } catch (e) {
        console.log(e);
    }
}

function displayAllPokemon(pokemon) {
    let list = document.getElementById("listing").innerHTML;
    let i = 0;
    for (i = 0; i < 50; i++) {
        list = list + `<li><a class="collection-item" href="#" id="${pokemon[i].name}" onclick=getPokemonDetail('${pokemon[i].name}')>${pokemon[i].name}</a></li>`;
    }
    document.getElementById("listing").innerHTML = list;
} async function getAllPokemon() {
    let url = "https://pokeapi.co/api/v2/pokemon/?limit=50&offset=50";
    try {
        let response = await fetch(url);
        let result = await response.json();
        displayAllPokemon(result);
    } catch (e) {
        console.log(e);
    }
}

function displayAllPokemon(pokemon) {
    let list = document.getElementById("listing").innerHTML;
    let i = 0;
    for (i = 0; i < 50; i++) {
        list = list + `<li><a class="collection-item" href="#" id="${pokemon[i].name}" onclick=getPokemonDetail('${pokemon[i].name}')>${pokemon[i].name}</a></li>`;
    }
    document.getElementById("listing").innerHTML = list;
}