import { useState } from "react";
import React from "react";

export const PokemonForm = ({
  myPokemonName: externalPokemonName,
  initialPokemonName = externalPokemonName || "",
  onSubmit,
}) => {
  const [pokemonName, setPokemonName] = useState(initialPokemonName);

  function handleChange(e) {
    setPokemonName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // setPokemonName(pokemonName);
    onSubmit(pokemonName);
  }

  function handleSelect(newPokemonName) {
    setPokemonName(newPokemonName);
  }

  return (
      <form className="pokemon-form" onSubmit={handleSubmit}>
        <label htmlFor="pokemonName-input">Pokemon Name</label>
        <small>
          Try
          <button onClick={() => handleSelect("pikachu")} type="button">
            "pikachu"
          </button>
          ,
          <button onClick={() => handleSelect("charizard")} type="button">
            "charizard"
          </button>
          , or
          <button onClick={() => handleSelect("mew")} type="button">
            "mew"
          </button>
        </small>

        <div className="input-submit">
          <input
            id="pokemonName-input"
            placeholder="Pokemon Name..."
            value={pokemonName}
            name="pokemonName"
            onChange={handleChange}
          />
          <button type="submit" disabled={!pokemonName.length}>
            Submit
          </button>
        </div>
      </form>
  );
};

