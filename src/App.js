import React, { useState } from "react";

const App = () => {
  const [pokemonName, setPokemonName] = useState("");

  console.log(pokemonName);

  function handleChange(e) {
    setPokemonName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPokemonName(pokemonName);
    // console.log("setting value");
  }

  function handleSelect(newPokemonName) {
    setPokemonName(newPokemonName);
    // console.log("I am called!");
  }

  return (
    <div className="pokemon-info-app">
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
    </div>
  );
};

export default App;
