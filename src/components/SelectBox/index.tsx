import { SelectBoxProps } from './types/SelectBoxProps';
import { SelectBoxView } from './views/SelectBoxView';

export const SelectBox = ({
	title,
	options,
	handleSelectChange,
	disabled,
	isFinalQuestion,
	id,
}: SelectBoxProps) => {
	return (
		<SelectBoxView
			id={id}
			disabled={disabled}
			title={title}
			options={options}
			handleSelectChange={handleSelectChange}
			isFinalQuestion={isFinalQuestion}
		/>
	);
};
