import { ProgressBarProps } from '../types/ProgressBarProps';
import './index.css';
export const ProgressBarView = ({
	StepsBar,
	currentStep,
}: ProgressBarProps) => {
	return (
		<>
			<ul>
				{StepsBar.map((step, index) => (
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
