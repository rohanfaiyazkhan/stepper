import React from 'react';
import { Stepper, Step } from 'react-mui-stepper';

export default function() {
	return (
		<Stepper withNumbers activeStep={1}>
			<Step>Activate powerloop</Step>
			<Step>Traverse perilous wastes</Step>
			<Step>Jump the shark</Step>
		</Stepper>
	);
}
