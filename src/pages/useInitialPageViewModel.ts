import { StepsBar } from 'data/stepsBar';
import { Step1, Step2, Step3 } from 'data/QuestionInputs';

import { useCallback, useState } from 'react';
import { FormDataProps } from './InitialPage/types/FormDataProps';

export function useInitialPageViewModel() {
	const [currentStep, setCurrentStep] = useState(StepsBar[0]);
	const [inputValueString, setInputvalueString] = useState('');
	const [inputValueNumber, setInputvalueNumber] = useState(0);
	const [selectValue, setSelectValue] = useState('');
	const [isFinalQuestion, setIsFinalQuestion] = useState<boolean>(false);
	const StepsQuestion = [Step1, Step2, Step3];
	// const [formData, setFormData] = useState<FormDataProps>();

	const [formData, setFormData] = useState<FormDataProps>({
		name: '',
		email: '',
		password: '',
		goal: '',
		ageToRedeem: 0,
		initialValue: 0,
		monthlyContribution: 0,
		iR: '',
		inss: '',
		salary: 0,
	});

	const handleInputChange = (event: any, id: number) => {
		const { value } = event.target;

		const matchingStep = StepsQuestion[currentStep - 1].find(
			(step) => step.id === id
		);
		if (matchingStep) {
			setFormData((prevFormData) => ({
				...prevFormData,
				[matchingStep.question]: value,
			}));
		}
	};

	const handleNextStep = useCallback(() => {
		if (currentStep < StepsBar.length) {
			setCurrentStep(currentStep + 1);
		}
	}, [currentStep]);

	const handleInputStringChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const value = event.target.value;
			setInputvalueString(value);
		},
		[setInputvalueString]
	);

	const verifyLastQuestion = useCallback(
		(parametro: string) => {
			if (parametro === 'simples') {
				setIsFinalQuestion(true);
			}
			setIsFinalQuestion(false);
		},
		[setIsFinalQuestion]
	);

	const handleInputNumberChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const value = Number(event.target.value);
			setInputvalueNumber(value);
		},
		[setInputvalueNumber]
	);

	const handleSelectChange = useCallback(
		(event: React.ChangeEvent<HTMLSelectElement>) => {
			const value = event.target.value;
			setSelectValue(value);
		},
		[setSelectValue]
	);

	return {
		handleNextStep,
		currentStep,
		setCurrentStep,
		StepsBar,
		inputValueString,
		inputValueNumber,
		selectValue,
		handleInputStringChange,
		handleInputNumberChange,
		handleSelectChange,
		verifyLastQuestion,
		isFinalQuestion,
		StepsQuestion,
	};
}
