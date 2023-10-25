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
	Steps,
	handleNextStep,
	currentStep,
	setCurrentStep,
}: InitialPageProps) => {
	const [formData, setFormData] = useState<FormDataProps>({
		name: '',
		email: '',
		password: '',
		goal: '',
		ageToRedeem: 0,
		initialValue: 0,
		monthlyContribution: 0,
		iR: '',
		inss: '',
		salary: 0,
	});
	const [selectValue, setSelectValue] = useState('');
	const [inputValue, setInputvalue] = useState('');

	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const value = event.target.value; // Obtenha o valor selecionado do evento
		setSelectValue(value);
	};
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value; // Obtenha o valor selecionado do evento
		setSelectValue(value);
	};

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
					Steps={Steps}
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
					{currentStep === 1 && (
						<>
							<InputBox
								type="text"
								placeholder="Nome"
								icon={userIcon}
								handleInputChange={handleInputChange}
							/>
							<InputBox
								type="text"
								placeholder="Email"
								icon={emailIcon}
								handleInputChange={handleInputChange}
							/>
							<InputBox
								type="password"
								placeholder="Senha"
								icon={passwordIcon}
								handleInputChange={handleInputChange}
							/>
						</>
					)}

					{currentStep === 2 && (
						<>
							<SelectBox
								title={'Qual o seu objetivo ?'}
								options={['', 'Aposentadoria', 'Desconto de IR']}
								handleSelectChange={handleSelectChange}
							/>
							<InputBox
								type="number"
								placeholder="Idade que gostaria de resgatar ?"
								icon={userIcon}
								handleInputChange={handleInputChange}
							/>
							<InputBox
								type="number"
								placeholder="Valor inicial"
								icon={emailIcon}
								handleInputChange={handleInputChange}
							/>
							<InputBox
								type="number"
								placeholder="Quanto iria depositar por mês ?"
								icon={passwordIcon}
								handleInputChange={handleInputChange}
							/>
						</>
					)}

					{currentStep === 3 && (
						<>
							<SelectBox
								title={'IR completo ou simples ?'}
								options={['', 'Completo', 'Simples']}
								handleSelectChange={handleSelectChange}
							/>
							<InputBox
								type="number"
								placeholder="Idade que gostaria de resgatar ?"
								icon={userIcon}
								handleInputChange={handleInputChange}
							/>
							<InputBox
								type="number"
								placeholder="Valor inicial"
								icon={emailIcon}
								handleInputChange={handleInputChange}
							/>
							<InputBox
								type="number"
								placeholder="Quanto iria depositar por mês ?"
								icon={passwordIcon}
								handleInputChange={handleInputChange}
							/>
						</>
					)}
					<Button
						title={'Continuar'}
						border={'fill'}
						handleNextStep={(e: React.MouseEvent<HTMLButtonElement>) => {
							e.preventDefault(); // Evita o comportamento padrão do formulário
							handleNextStep();
						}}
					/>
				</form>
			</div>
		</div>
	);
};
