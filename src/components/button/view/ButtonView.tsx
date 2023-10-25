import { ButtonProps } from '../types/ButtonProps';

export const ButtonView = ({ title, border, handleNextStep }: ButtonProps) => {
	const borderType = border === 'fill' ? 'none' : '2px solid #ffffff';

	return (
		<>
			<button
				onClick={handleNextStep}
				style={{
					width: '180px',
					height: '50px',
					borderRadius: '22px',
					background: '#36320A',
					color: '#ffffff',
					fontSize: '20px',
					textAlign: 'center',
					fontWeight: '700',
					border: borderType,
					cursor: 'pointer',
				}}
			>
				{title}
			</button>
		</>
	);
};
