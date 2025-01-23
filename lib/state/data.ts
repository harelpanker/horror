import { text0 } from '@/lib/steps-text/step0';
import { text1 } from '@/lib/steps-text/step1';
import { text2 } from '@/lib/steps-text/step2';
import { text3 } from '@/lib/steps-text/step3';
import { text4 } from '@/lib/steps-text/step4';
import { text5 } from '@/lib/steps-text/step5';
import { text6 } from '@/lib/steps-text/step6';

export type StepData = {
	step: number;
	description: string;
	correctAnswer: string;
	incorrectAnswer: string;
	correctAnswerStep: number;
	incorrectAnswerStep: number;
	errorMessage: string;
};

export const stepsData: StepData[] = [
	{
		step: 0,
		description: text0.replace(/\n/g, '<br />'),
		correctAnswer: '',
		incorrectAnswer: '',
		correctAnswerStep: 1,
		incorrectAnswerStep: 1,
		errorMessage: '> Awating input',
	},
	{
		step: 1,
		description: text1.replace(/\n/g, '<br />'),
		correctAnswer: 'y',
		incorrectAnswer: 'n',
		correctAnswerStep: 3,
		incorrectAnswerStep: 2,
		errorMessage: '',
	},
	{
		step: 2,
		description: text2.replace(/\n/g, '<br />'),
		correctAnswer: 'y',
		incorrectAnswer: '',
		correctAnswerStep: 0,
		incorrectAnswerStep: 0,
		errorMessage: '',
	},
	{
		step: 3,
		description: text3.replace(/\n/g, '<br />'),
		correctAnswer: 'y',
		incorrectAnswer: 'n',
		correctAnswerStep: 4,
		incorrectAnswerStep: 2,
		errorMessage: '',
	},
	{
		step: 4,
		description: text4.replace(/\n/g, '<br />'),
		correctAnswer: 'create.role {title:viewer, actions: read}',
		incorrectAnswer: '',
		correctAnswerStep: 6,
		incorrectAnswerStep: 5,
		errorMessage: '',
	},
	{
		step: 5,
		description: text5.replace(/\n/g, '<br />'),
		correctAnswer: 'y',
		incorrectAnswer: '',
		correctAnswerStep: 4,
		incorrectAnswerStep: 5,
		errorMessage: '',
	},
	{
		step: 6,
		description: text6.replace(/\n/g, '<br />'),
		correctAnswer: 'y',
		incorrectAnswer: '',
		correctAnswerStep: 7,
		incorrectAnswerStep: 6, // leave him in the same step
		errorMessage: '',
	},
];
