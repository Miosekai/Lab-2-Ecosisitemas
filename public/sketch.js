const pokemonContainer = document.querySelector(".pokemon-container")

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        createPokemon(data);
      });
  }

function fetchPokemons(number) {
    for (let i = 1; i <= number; i++) {
        fetchPokemon(i);
    }
}

function createPokemon(pokemon) {
    const card = document.createElement("div");
    card.classList.add("pokemon-block");
    console.log (pokemon);
  
    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");
  
    const sprite = document.createElement("img");
    sprite.src = pokemon.sprites.front_default;
  
    spriteContainer.appendChild(sprite);
  
    const number = document.createElement("p");
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;
  
    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;

    const height = document.createElement("p");
    height.classList.add("height");
    height.textContent = `Altura: ${pokemon.height/ 10}m`;

    const weight = document.createElement("p");
    weight.classList.add("weight");
    weight.textContent = `Peso: ${pokemon.weight/ 10}kg`;

    const hp = document.createElement("p");
    hp.classList.add("hp");
    hp.textContent = `Vida: ${pokemon.stats[0].base_stat}`;
  
    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(height);
    card.appendChild(weight);
    card.appendChild(hp);

    pokemonContainer.appendChild(card);
}

fetchPokemons(9);