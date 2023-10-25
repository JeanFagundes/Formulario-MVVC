import { InputBoxProps } from './types/InputBoxProps';
import { InputBoxView } from './views/InputBoxView';

export const InputBox = ({
	icon,
	placeholder,
	type,
	handleInputChange,
}: InputBoxProps) => {
	return (
		<InputBoxView
			icon={icon}
			placeholder={placeholder}
			type={type}
			handleInputChange={handleInputChange}
		/>
	);
};
