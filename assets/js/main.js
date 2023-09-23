const pokemonList = document.getElementById("pokemonList")   

const bot = document.getElementById('next')

const limit = 5;
let offset = 0;
loadPokemonItens(offset,limit)

function loadPokemonItens(offset,limit){

    pokeApi.getPokemons(offset,limit).then((pokemonLis = [])=> {
        pokemonList.innerHTML +=  pokemonLis.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>` ).join('')}
                </ol>
                
                <a class="modal-btn" href="#demo-modal">
                <img class="bulb" src="${pokemon.photo}" alt="${pokemon.name} image">
                </a>
                    <div id="demo-modal" class="modal">
                        <div class="modal-content">
                           
                            <div class="pokemon-modal">
                            </div>
                            <div class = "tips">
                            </div>
                             <div class="modal__footer">
                                <a href="#" class="modal__footer-btn-close"> Voltar </a>
                            </div>
                                
                           
                        </div>
                    </div>
            </div>
    
        </li>

    `).join('')
        // Pega os a lista de pokemons no getPokemon e entao cria uma lista
        // com eles, mapeia cada pokemon na lista e convert eles para html,
        // depois disso não todos juntados sem separação pelo join e adicionados 
        // com o comando inner
    })


}
bot.addEventListener('click',()=>{
    offset += limit
    loadPokemonItens(offset,limit)
})
 
