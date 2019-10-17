import React from 'react';
import Step from './Step';

interface StepperProps {
	withNumbers?: boolean;
	activeStep?: number;
	children?: Array<JSX.Element> | JSX.Element;
}

const Stepper: React.FC<StepperProps> = (props: StepperProps) => {
	const activeStep = props.activeStep !== undefined ? props.activeStep : 0;

	return (
		<div className="mdl-card mdl-shadow--2dp">
			<div className="mdl-card__supporting-text">
				<div className="mdl-stepper-horizontal-alternative">
					{React.Children.map(props.children, (child, index) => {
						if (child !== undefined && child.type === Step) {
							return (
								<Step
									active={activeStep >= index}
									stepNumber={props.withNumbers ? index + 1 : null}
									done={activeStep > index}>
									{child.props.children}
								</Step>
							);
						}
					})}
				</div>
			</div>
		</div>
	);
};

export default Stepper;
