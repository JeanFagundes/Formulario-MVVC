import { InitialPageView } from './InitialPage/views/InitialPageView';
import { useInitialPageViewModel } from './useInitialPageViewModel';

export default function InitialPage() {
	const { currentStep, Steps, handleNextStep, setCurrentStep } =
		useInitialPageViewModel();
	return (
		<>
			<InitialPageView
				currentStep={currentStep}
				Steps={Steps}
				handleNextStep={handleNextStep}
				setCurrentStep={setCurrentStep}
			/>
		</>
	);
}
