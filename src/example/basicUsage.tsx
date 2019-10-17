import React from 'react';
import Stepper from '../Stepper';
import Step from '../Step';

export default function() {
	return (
		<Stepper withNumbers activeStep={1}>
			<Step>Activate powerloop</Step>
			<Step>Traverse perilous wastes</Step>
			<Step>Jump the shark</Step>
		</Stepper>
	);
}
