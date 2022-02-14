import React, { useState } from "react";
import ReactDOM from "react-dom";

function Increment() {
  const [state, setState] = useState(0);

  const increase = () => setState(state + 1);

  return (
    <div>
      <button onClick={increase}>Click Me</button>
      <p>I'm increasing: {state}</p>
    </div>
  );
}

ReactDOM.render(<Increment />, document.getElementById("root"));
