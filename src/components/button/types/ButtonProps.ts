export interface ButtonProps {
	title: string;
	border: string;
	handleNextStep?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
