interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
}

function NavBar({setPokemonIndex, pokemonList}: NavBarProps) {

const handleClick = (pokemonIndex: number) => {
  setPokemonIndex(pokemonIndex)
}

  return(
      <div>
      {pokemonList.map((pokemon, pokemonIndex) => (<button key={pokemon.name} onClick={() => handleClick(pokemonIndex)}>{pokemon.name}</button>))}
      </div>
  )
}

export default NavBar;
