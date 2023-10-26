import { ChangeEvent } from 'react';

export interface SelectBoxProps {
	id: number;
	options: string[];
	title: string;
	handleSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
	disabled: boolean;
	isFinalQuestion: boolean;
}
