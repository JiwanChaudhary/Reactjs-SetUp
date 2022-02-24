import React, { useState } from "react";
import {PokemonForm} from "./Pokemon";

const App = () => {
  const [pokemonName, setPokemonName] = useState("");

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName);
  }

  console.log(pokemonName);

  return (
    <div className="pokemon-info-app">
      <PokemonForm myPokemonName={pokemonName} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;
