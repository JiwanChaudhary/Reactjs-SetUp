import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Test from "./Test";
import style from "./index.module.css";

console.log(style);

function Theme() {
  const [theme, setTheme] = React.useState(style.light);
 

  const toDark = () => setTheme(style.dark);
  const toLight = () => setTheme(style.light);

    return (
      <div className={theme}>
        {theme === style.light ? (
          <button onClick={toDark}>Light</button>
        ) : (
          <button onClick={toLight}>Dark</button>
        )}
        <Test />
      </div>
    );
}

ReactDOM.render(<Theme />, document.getElementById("root"));
