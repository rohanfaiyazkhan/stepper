import * as React from "react";
import { render } from "react-dom";
import Stepper from "./Stepper";
import Step from "./Step";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Stepper withNumbers activeStep={1}>
        <Step>Activate powerloop</Step>
        <Step>Traverse perilous wastes</Step>
        <Step>Jump the shark</Step>
      </Stepper>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
