import { ChangeEvent } from 'react';

export interface InputBoxProps {
	id: number;
	icon: string;
	placeholder: string;
	type: string;
	handleInputStringChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	handleInputNumberChange?: (event: ChangeEvent<HTMLInputElement>) => void;
	disabled: boolean;
	isFinalQuestion: boolean;
}
