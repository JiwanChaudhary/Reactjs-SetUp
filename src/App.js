import React from "react";

const App = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log(e.target[3].value);
    console.log("I am submitted");
  }

  return (
    <div className="pokemon-info-app">
      <form className="pokemon-form" onSubmit={handleSubmit}>
        <label htmlFor="pokemonName-input">Pokemon Name</label>
        <small>
          Try
          <button type="button">"pikachu"</button>,
          <button type="button">"charizard"</button>, or
          <button type="button">"mew"</button>
        </small>

        <div className="input-submit">
          <input id="pokemonName-input" placeholder="Pokemon Name..." />
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
