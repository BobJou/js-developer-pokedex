const pokeApi = {}

pokeApi.getPokemons = function(offset=0,limit=5) {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)    
            .then((response)=>  response.json())
            .then((jsonBody)=> jsonBody.results)
            .then((pokemonss) => pokemonss.map(pokeApi.getPokemonsDetail))
            .then((detailRequests)=> Promise.all(detailRequests))
            .then((pokemonDetais) => pokemonDetais)

}

function convertPokeApiDetailPokemon(pokemonDetais){
    const types = pokemonDetais.types.map((typeSlot) => typeSlot.type.name)
    const pokemon = new Pokemon
    const [type] = types
    pokemon.name = pokemonDetais.name
    pokemon.number = pokemonDetais.id
    pokemon.types = types 
    pokemon.type = type

    pokemon.photo = pokemonDetais.sprites.other.dream_world.front_default
    return pokemon
}  


pokeApi.getPokemonsDetail = (pokemon) =>{
    return fetch(pokemon.url)
    .then((response)=> response.json())
    .then(convertPokeApiDetailPokemon)

    }


Promise.all(
    [
        fetch('https://pokeapi.co/api/v2/pokemon/1'),
        fetch('https://pokeapi.co/api/v2/pokemon/2'), 
        fetch('https://pokeapi.co/api/v2/pokemon/3') ,
        fetch('https://pokeapi.co/api/v2/pokemon/4') ,
        fetch('https://pokeapi.co/api/v2/pokemon/5')




    ]
).then((results) =>{


})