import React, { PropsWithChildren, Children } from "react";
import Step from "./Step";

interface StepperProps {
  withNumbers?: boolean;
  activeStep?: number;
}

function Stepper(props: PropsWithChildren<StepperProps>) {
  const activeStep = props.activeStep !== undefined ? props.activeStep : 0;

  return (
    <div className="mdl-card mdl-shadow--2dp">
      <div className="mdl-card__supporting-text">
        <div className="mdl-stepper-horizontal-alternative">
          {Children.map(props.children, (child, index) => {
            if (child.type === Step) {
              return (
                <Step
                  active={activeStep >= index}
                  stepNumber={props.withNumbers && index + 1}
                  done={activeStep > index}
                >
                  {child.props.children}
                </Step>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Stepper;
