import { ChangeEvent } from 'react';

export interface InputBoxProps {
	icon: string;
	placeholder: string;
	type: string;
	handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
