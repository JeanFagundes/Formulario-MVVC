import { SelectBoxProps } from '../types/SelectBoxProps';

export const SelectBoxView = ({
	title,
	options,
	handleSelectChange,
}: SelectBoxProps) => {
	return (
		<>
			<label
				style={{
					textAlign: 'center',
					fontSize: '16px',
					fontWeight: '700',
				}}
			>
				{title}
			</label>
			<select
				style={{
					width: '87.5%',
					borderRadius: '6px',
					height: '40px',
					boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.50)',
					border: 'none',
					backgroundColor: '#E2CE1A',
					outline: 'none',
					paddingLeft: '40px',
					fontSize: '16px',
					fontWeight: '700',
					color: 'rgba(0, 0, 0, 0.60)',
				}}
			>
				{options.map((item, index) => (
					<option
						key={index}
						value={item}
						style={{
							paddingLeft: '40px',
							backgroundPosition: 'left center',
							backgroundSize: '20px',
							backgroundPositionX: '12px',
							backgroundPositionY: '6px',
							fontSize: '16px',
							fontWeight: '700',
							color: 'rgba(0, 0, 0, 0.60)',
						}}
					>
						{item}
					</option>
				))}
			</select>
		</>
	);
};
