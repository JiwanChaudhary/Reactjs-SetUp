import React from "react";

const App = () => {
  return (
    <div className="pokemon-info-app">
      <form className="pokemon-form">
        <label>Pokemon Name</label>
        <small>
          Try
          <button>"pikachu"</button>,<button>"charizard"</button>, or
          <button>"mew"</button>
        </small>

        <div className="input-submit">
          <input />
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
