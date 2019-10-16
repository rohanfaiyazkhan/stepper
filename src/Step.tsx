import React, { PropsWithChildren } from "react";

interface StepProps {
  active: boolean;
  done: boolean;
  stepNumber: number;
}

function Step(props: PropsWithChildren<StepProps>) {
  let rootClassNames = "mdl-stepper-step";

  if (props.done) {
    rootClassNames += " step-done";
  }

  if (props.active) {
    rootClassNames += " active-step";
  }

  return (
    <div className={rootClassNames}>
      <div className="mdl-stepper-circle">
        <span>{props.stepNumber}</span>
      </div>
      <div className="mdl-stepper-title">{props.children}</div>
      <div className="mdl-stepper-bar-left" />
      <div className="mdl-stepper-bar-right" />
    </div>
  );
}

export default Step;
