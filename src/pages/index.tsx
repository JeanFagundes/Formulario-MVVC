import { InitialPageView } from './InitialPage/views/InitialPageView';
import { useInitialPageViewModel } from './useInitialPageViewModel';

export default function InitialPage() {
	const {
		currentStep,
		StepsBar,
		handleNextStep,
		setCurrentStep,
		handleInputStringChange,
		handleInputNumberChange,
		inputValueNumber,
		inputValueString,
		handleSelectChange,
		selectValue,
		StepsQuestion,
		verifyLastQuestion,
		isFinalQuestion,
	} = useInitialPageViewModel();
	return (
		<>
			<InitialPageView
				currentStep={currentStep}
				StepsBar={StepsBar}
				handleNextStep={handleNextStep}
				setCurrentStep={setCurrentStep}
				handleInputStringChange={handleInputStringChange}
				handleInputNumberChange={handleInputNumberChange}
				inputValueNumber={inputValueNumber}
				inputValueString={inputValueString}
				handleSelectChange={handleSelectChange}
				selectValue={selectValue}
				StepsQuestion={StepsQuestion}
				verifyLastQuestion={verifyLastQuestion}
				isFinalQuestion={isFinalQuestion}
			/>
		</>
	);
}
