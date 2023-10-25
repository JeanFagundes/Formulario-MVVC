import { ProgressBarProps } from './types/ProgressBarProps';
import { ProgressBarView } from './views/ProgressBarView';

export const ProgressBar = ({
	Steps,
	currentStep,
	handleNextStep,
	setCurrentStep,
}: ProgressBarProps) => {
	return (
		<ProgressBarView
			Steps={Steps}
			currentStep={currentStep}
			handleNextStep={handleNextStep}
			setCurrentStep={setCurrentStep}
		/>
	);
};
