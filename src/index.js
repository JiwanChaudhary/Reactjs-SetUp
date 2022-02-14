import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

class Theme extends React.Component {
  state = {
    theme: "light",
  };

  toDark = () => this.setState({ theme: "dark" });
  toLight = () => this.setState({ theme: "light" });

  render() {
    const { theme } = this.state;

    return (
      <div className={theme}>
        {theme === "light" ? (
          <button onClick={this.toDark}>Light</button>
        ) : (
          <button onClick={this.toLight}>Dark</button>
        )}
      </div>
    )
  };
}

ReactDOM.render(<Theme />, document.getElementById("root"));
