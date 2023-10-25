import { Steps } from 'data/steps';
import { useCallback, useState } from 'react';

export function useInitialPageViewModel() {
	const [currentStep, setCurrentStep] = useState(Steps[0]);

	const handleNextStep = useCallback(() => {
		if (currentStep < Steps.length) {
			setCurrentStep(currentStep + 1);
		}
	}, [currentStep]);
	return {
		handleNextStep,
		currentStep,
		setCurrentStep,
		Steps,
	};
}
