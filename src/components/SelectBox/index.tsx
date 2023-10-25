import { SelectBoxProps } from './types/SelectBoxProps';
import { SelectBoxView } from './views/SelectBoxView';

export const SelectBox = ({
	title,
	options,
	handleSelectChange,
}: SelectBoxProps) => {
	return (
		<SelectBoxView
			title={title}
			options={options}
			handleSelectChange={handleSelectChange}
		/>
	);
};
