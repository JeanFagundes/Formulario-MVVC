export type StepWithInput = {
	id: number;
	question: string;
	type: string;
	placeholder: string;
	icon: string;
	options: string[];
};

export interface InitialPageProps {
	handleNextStep: (e: React.MouseEvent<HTMLButtonElement>) => void;
	currentStep: number;
	setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
	StepsBar: number[];
	handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	handleInputStringChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleInputNumberChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	selectValue: string;
	inputValueNumber: number;
	inputValueString: string;
	StepsQuestion: StepWithInput[][];
	// finalQuestionSelectChange: (
	// 	event: React.ChangeEvent<HTMLSelectElement>
	// ) => void;
	// finalQuestionInputChange: (
	// 	event: React.ChangeEvent<HTMLInputElement>
	// ) => void;
	isFinalQuestion: boolean;
	verifyLastQuestion: (param: string) => void;
}
