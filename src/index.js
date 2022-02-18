import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Test from "./Test";

function Theme() {
  const [theme, setTheme] = React.useState("light");
 

  const toDark = () => setTheme("dark");
  const toLight = () => setTheme("light");

    return (
      <div className={theme}>
        {theme === "light" ? (
          <button onClick={toDark}>Light</button>
        ) : (
          <button onClick={toLight}>Dark</button>
        )}
        <Test />
      </div>
    );
}

ReactDOM.render(<Theme />, document.getElementById("root"));
