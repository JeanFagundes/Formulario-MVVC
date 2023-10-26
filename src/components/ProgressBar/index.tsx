import { ProgressBarProps } from './types/ProgressBarProps';
import { ProgressBarView } from './views/ProgressBarView';

export const ProgressBar = ({
	StepsBar,
	currentStep,
	handleNextStep,
	setCurrentStep,
}: ProgressBarProps) => {
	return (
		<ProgressBarView
			StepsBar={StepsBar}
			currentStep={currentStep}
			handleNextStep={handleNextStep}
			setCurrentStep={setCurrentStep}
		/>
	);
};
