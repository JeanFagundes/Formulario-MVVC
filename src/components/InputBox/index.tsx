import { InputBoxProps } from './types/InputBoxProps';
import { InputBoxView } from './views/InputBoxView';

export const InputBox = ({
	icon,
	placeholder,
	type,
	handleInputStringChange,
	handleInputNumberChange,
	isFinalQuestion,
	id,
}: InputBoxProps) => {
	return (
		<InputBoxView
			id={id}
			disabled
			icon={icon}
			placeholder={placeholder}
			type={type}
			handleInputStringChange={handleInputStringChange}
			handleInputNumberChange={handleInputNumberChange}
			isFinalQuestion={isFinalQuestion}
		/>
	);
};
