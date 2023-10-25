import { ButtonProps } from './types/ButtonProps';
import { ButtonView } from './view/ButtonView';

export const Button = ({ title, border, handleNextStep }: ButtonProps) => (
	<ButtonView title={title} border={border} handleNextStep={handleNextStep} />
);
