import React from 'react';

interface StepProps {
	active?: boolean;
	done?: boolean;
	stepNumber?: number | null;
	children?: React.ReactNode;
}

const Step: React.FC<StepProps> = (props: StepProps) => {
	let classNames = 'mdl-stepper-step';

	if (props.done) {
		classNames += ' step-done';
	}

	if (props.active) {
		classNames += ' active-step';
	}

	return (
		<div className={classNames}>
			<div className="mdl-stepper-circle">
				<span>{props.stepNumber}</span>
			</div>
			<div className="mdl-stepper-title">{props.children}</div>
			<div className="mdl-stepper-bar-left" />
			<div className="mdl-stepper-bar-right" />
		</div>
	);
};

export default Step;
