import { StepWithInput } from './../pages/InitialPage/types/InitialPageProps';
export const QuestionInputs = [
	{
		id: 1,
		question: 'Nome Completo',
		type: 'text',
		placeholder: 'Nome',
		icon: '',
		options: [],
	},
	{
		id: 2,
		question: 'Email',
		type: 'text',
		placeholder: 'Email',
		icon: '',
		options: [],
	},
	{
		id: 3,
		question: 'Senha',
		type: 'password',
		placeholder: 'Senha',
		icon: '',
		options: [],
	},
	{
		id: 4,
		question: 'Idate que gostaria de resgatar ?',
		type: 'number',
		placeholder: 'Idate que gostaria de resgatar',
		icon: '',
		options: [],
	},
	{
		id: 5,
		question: 'Valor inicial ?',
		type: 'number',
		placeholder: 'Valor inicial',
		icon: '',
		options: [],
	},
	{
		id: 6,
		question: 'Valor mensal ?',
		type: 'number',
		placeholder: 'Valor mensal',
		icon: '',
		options: [],
	},
	{
		id: 7,
		question: 'Salario bruto mensal ?',
		type: 'number',
		placeholder: 'Salario bruto mensal',
		icon: '',
		options: [],
	},
	{
		id: 8,
		question: 'Qual o seu objetivo ?',
		type: '',
		placeholder: '',
		icon: '',
		options: ['', 'Aposentadoria', 'Desconto de IR'],
	},
	{
		id: 9,
		question: 'IR completo ou simples ?',
		type: '',
		placeholder: '',
		icon: '',
		options: ['', 'Completo', 'Simples'],
	},
	{
		id: 10,
		question: 'Contribui para o INSS ?',
		type: '',
		placeholder: '',
		icon: '',
		options: ['', 'Sim', 'Não'],
	},
];

const questionsForStep1 = ['Nome Completo', 'Email', 'Senha'];
const questionsForStep2 = [
	'Qual o seu objetivo ?',
	'Idate que gostaria de resgatar ?',
	'Valor inicial ?',
	'Valor mensal ?',
];
const questionsForStep3 = [
	'IR completo ou simples ?',
	'Contribui para o INSS ?',
	'Salario bruto mensal ?',
];

const step1filter = questionsForStep1.map(
	(text) =>
		QuestionInputs.find(
			(question) => question.question === text
		) as StepWithInput
);
const step2filter = questionsForStep2.map(
	(text) =>
		QuestionInputs.find(
			(question) => question.question === text
		) as StepWithInput
);
const step3filter = questionsForStep3.map(
	(text) =>
		QuestionInputs.find(
			(question) => question.question === text
		) as StepWithInput
);

export const Step1: StepWithInput[] = step1filter;
export const Step2: StepWithInput[] = step2filter;
export const Step3: StepWithInput[] = step3filter;
