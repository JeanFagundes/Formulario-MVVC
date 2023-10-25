import { ChangeEvent } from 'react';

export interface SelectBoxProps {
	options: string[];
	title: string;
	handleSelectChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
