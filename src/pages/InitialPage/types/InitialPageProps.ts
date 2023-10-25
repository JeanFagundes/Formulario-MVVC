export interface InitialPageProps {
	handleNextStep: () => void;
	currentStep: number;
	setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
	Steps: number[];
}
