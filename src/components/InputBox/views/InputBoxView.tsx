import { InputBoxProps } from '../types/InputBoxProps';

export const InputBoxView = ({
	id,
	icon,
	placeholder,
	type,
	handleInputStringChange,
	handleInputNumberChange,
	isFinalQuestion,
}: InputBoxProps) => {
	let changeElement;
	if (type === 'number') {
		changeElement = handleInputNumberChange;
	} else {
		changeElement = handleInputStringChange;
	}
	return (
		<>
			<input
				id={id.toString()}
				disabled={isFinalQuestion}
				onChange={changeElement}
				autoComplete="off"
				type={type}
				placeholder={placeholder}
				style={{
					borderRadius: '6px',
					width: '80%',
					height: '40px',
					boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.50)',
					border: 'none',
					backgroundColor: '#E2CE1A',
					outline: 'none',
					backgroundImage: `url('${icon}')`,
					backgroundRepeat: 'no-repeat',
					paddingLeft: '40px',
					backgroundPosition: 'left center',
					backgroundSize: '20px',
					backgroundPositionX: '12px',
					backgroundPositionY: '6px',
					fontSize: '16px',
					fontWeight: '700',
					color: 'rgba(0, 0, 0, 0.60)',
				}}
			/>
		</>
	);
};
