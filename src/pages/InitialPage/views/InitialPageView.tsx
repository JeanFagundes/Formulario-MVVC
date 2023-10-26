import { InputBox } from 'components/InputBox';
import emailIcon from 'assets/emailIcon.svg';
import passwordIcon from 'assets/passwordIcon.svg';
import userIcon from 'assets/userIcon.svg';
import { Button } from 'components/button';
import { ProgressBar } from 'components/ProgressBar';
import { InitialPageProps } from '../types/InitialPageProps';
import { useState } from 'react';
import { FormDataProps } from '../types/FormDataProps';
import { SelectBox } from 'components/SelectBox';
export const InitialPageView = ({
	StepsBar,
	handleNextStep,
	currentStep,
	setCurrentStep,
	handleInputStringChange,
	handleInputNumberChange,
	handleSelectChange,
	inputValueNumber,
	inputValueString,
	selectValue,
	StepsQuestion,
	verifyLastQuestion,
	isFinalQuestion,
}: InitialPageProps) => {



	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
			}}
		>
			<div
				style={{
					backgroundColor: '#795548',
					minWidth: '240px',
					width: '25%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '20px',
					color: 'white',
					paddingTop: '110px',
				}}
			>
				<h1>Kambo</h1>
				<div style={{ textAlign: 'center' }}>
					<h2>Seja bem vindo!</h2>
					<p style={{ fontSize: '20px', paddingBottom: '20px' }}>
						Acesse sua conta agora mesmo.
					</p>
				</div>
				<div style={{ textAlign: 'center', lineHeight: '36px' }}>
					<Button title={'Entrar'} border={'outline'} />
					<p>
						<a href="/" style={{ textDecoration: 'none', color: 'white' }}>
							Esqueci minha senha
						</a>
					</p>
				</div>
			</div>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					backgroundColor: 'yellow',
					minWidth: '500px',
					paddingTop: '20px',
					width: '75%',
					gap: '20px',
					zIndex: 2,
				}}
			>
				<ProgressBar
					StepsBar={StepsBar}
					currentStep={currentStep}
					handleNextStep={handleNextStep}
					setCurrentStep={setCurrentStep}
				/>

				<div style={{ textAlign: 'center' }}>
					<h1 style={{ fontWeight: '800' }}>Crie sua conta</h1>
					<p style={{ fontWeight: '500', fontSize: '19px' }}>
						Preencha o formulário
					</p>
				</div>

				<form
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: '24px',
						width: '100%',
						alignItems: 'center',
					}}
				>
					<>
						{StepsQuestion[currentStep - 1].map((item) => (
							<>
								<input
									id={item.id.toString()}
									type="text"
									onChange={(event) => handleInputChange(event, item.id)}
								/>

								{item.options.length ? (
									<SelectBox
										id={item.id}
										disabled
										title={item.question}
										options={item.options}
										handleSelectChange={handleSelectChange}
										isFinalQuestion={isFinalQuestion}
									/>
								) : (
									<InputBox
										id={item.id}
										disabled
										type={item.type}
										placeholder={item.placeholder}
										icon={userIcon}
										handleInputStringChange={handleInputStringChange}
										handleInputNumberChange={handleInputNumberChange}
										isFinalQuestion={isFinalQuestion}
									/>
								)}
							</>
						))}
						{currentStep !== StepsQuestion.length ? (
							<Button
								title={'Continuar'}
								border={'fill'}
								handleNextStep={(e: React.MouseEvent<HTMLButtonElement>) => {
									e.preventDefault();
									handleNextStep(e);
								}}
							/>
						) : (
							<Button
								title={'Gerar Relatorio'}
								border={'fill'}
								handleNextStep={(e: React.MouseEvent<HTMLButtonElement>) => {
									e.preventDefault();
									handleNextStep(e);
								}}
							/>
						)}
					</>
				</form>
			</div>
		</div>
	);
};
