export interface ProgressBarProps {
	handleNextStep: (e: React.MouseEvent<HTMLButtonElement>) => void;
	currentStep: number;
	setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
	StepsBar: number[];
}
