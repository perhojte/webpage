import * as React from "react";
import * as ReactDOM from "react-dom";

import { Clock } from "./components/Clock";

function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
