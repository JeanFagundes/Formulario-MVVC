import { ProgressBarProps } from '../types/ProgressBarProps';
import './index.css';
export const ProgressBarView = ({ Steps, currentStep }: ProgressBarProps) => {
	return (
		<>
			<ul>
				{Steps.map((step, index) => (
					<div key={index}>
						<li className={currentStep === index + 1 ? 'active' : ''}></li>
						<p>Step {step}</p>
					</div>
				))}
			</ul>
			<div className="lineHeight">.</div>
		</>
	);
};
