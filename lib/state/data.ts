import { text0 } from '@/lib/steps-text/step0';
import { text1 } from '@/lib/steps-text/step1';
import { text2 } from '@/lib/steps-text/step2';
import { text3 } from '@/lib/steps-text/step3';
import { text4 } from '@/lib/steps-text/step4';
import { text5 } from '@/lib/steps-text/step5';
import { text6 } from '@/lib/steps-text/step6';
import { text7 } from '@/lib/steps-text/step7';
import { text8 } from '@/lib/steps-text/step8';
import { text9 } from '@/lib/steps-text/step9';
import { text10 } from '@/lib/steps-text/step10';
import { text11 } from '@/lib/steps-text/step11';
import { text12 } from '@/lib/steps-text/step12';
import { text13 } from '@/lib/steps-text/step13';
import { text14 } from '@/lib/steps-text/step14';
import { text15 } from '@/lib/steps-text/step15';
import { text16 } from '@/lib/steps-text/step16';

export type StepData = {
	step: number;
	description: string;
	correctAnswer: string;
	correctAnswer2?: string;
	incorrectAnswer: string;
	correctAnswerStep: number;
	incorrectAnswerStep: number;
	errorMessage: string;
	isErrorStep?: boolean;
};

export type SyntaxData = {
	step: number;
	syntax: string[];
};

export const syntaxReference: SyntaxData[] = [
	{
		step: 4,
		syntax: ['create.role {title:viewer, actions: read}'],
	},
	{
		step: 7,
		syntax: [
			'create.role {title:editor, actions: view, edit}',
			'create.role {title:moderator, actions: view, create, edit, delete}',
		],
	},
	{
		step: 9,
		syntax: ['create.role {title:admin, actions: assign.role, list.role, delete.role}'],
	},
	{
		step: 12,
		syntax: ['assing.role {editor:roy234}'],
	},
	{
		step: 13,
		syntax: ['assing.role {viewer:joseph912}'],
	},
	{
		step: 14,
		syntax: ['assing.role {editor:robert791}'],
	},
];

export const stepsData: StepData[] = [
	{
		step: 0,
		description: text0,
		correctAnswer: '',
		incorrectAnswer: '',
		correctAnswerStep: 1,
		incorrectAnswerStep: 1,
		errorMessage: '> Awating input',
	},
	{
		step: 1,
		description: text1,
		correctAnswer: 'y',
		incorrectAnswer: 'n',
		correctAnswerStep: 3,
		incorrectAnswerStep: 2,
		errorMessage: '',
	},
	{
		step: 2,
		description: text2,
		correctAnswer: 'y',
		incorrectAnswer: '',
		correctAnswerStep: 0,
		incorrectAnswerStep: 0,
		errorMessage: '',
	},
	{
		step: 3,
		description: text3,
		correctAnswer: 'y',
		incorrectAnswer: 'n',
		correctAnswerStep: 4,
		incorrectAnswerStep: 2,
		errorMessage: '',
	},
	{
		step: 4,
		description: text4,
		correctAnswer: syntaxReference[0].syntax[0],
		incorrectAnswer: '',
		correctAnswerStep: 6,
		incorrectAnswerStep: 5,
		errorMessage: '',
	},
	{
		step: 5,
		description: text5,
		correctAnswer: 'y',
		incorrectAnswer: '',
		correctAnswerStep: 4,
		incorrectAnswerStep: 5,
		errorMessage: '',
		isErrorStep: true,
	},
	{
		step: 6,
		description: text6,
		correctAnswer: 'y',
		incorrectAnswer: '',
		correctAnswerStep: 7,
		incorrectAnswerStep: 6,
		errorMessage: '',
	},
	{
		step: 7,
		description: text7,
		correctAnswer: syntaxReference[1].syntax[0],
		correctAnswer2: syntaxReference[1].syntax[1],
		incorrectAnswer: '',
		correctAnswerStep: 9,
		incorrectAnswerStep: 8,
		errorMessage: ' ',
	},
	{
		step: 8,
		description: text8,
		correctAnswer: 'y',
		incorrectAnswer: '',
		correctAnswerStep: 7,
		incorrectAnswerStep: 8,
		errorMessage: '',
		isErrorStep: true,
	},
	{
		step: 9,
		description: text9,
		correctAnswer: syntaxReference[2].syntax[0],
		incorrectAnswer: '',
		correctAnswerStep: 11,
		incorrectAnswerStep: 10,
		errorMessage: '',
	},
	{
		step: 10,
		description: text10,
		correctAnswer: 'y',
		incorrectAnswer: '',
		correctAnswerStep: 9,
		incorrectAnswerStep: 10,
		errorMessage: '',
		isErrorStep: true,
	},
	{
		step: 11,
		description: text11,
		correctAnswer: 'y',
		incorrectAnswer: '',
		correctAnswerStep: 12,
		incorrectAnswerStep: 11,
		errorMessage: '',
	},
	{
		step: 12,
		description: text12,
		correctAnswer: syntaxReference[3].syntax[0],
		incorrectAnswer: '',
		correctAnswerStep: 13,
		incorrectAnswerStep: 12,
		errorMessage: '<Awaiting Input>',
	},
	{
		step: 13,
		description: text13,
		correctAnswer: syntaxReference[4].syntax[0],
		incorrectAnswer: '',
		correctAnswerStep: 14,
		incorrectAnswerStep: 13,
		errorMessage: '',
	},
	{
		step: 14,
		description: text14,
		correctAnswer: syntaxReference[5].syntax[0],
		incorrectAnswer: '',
		correctAnswerStep: 15,
		incorrectAnswerStep: 14,
		errorMessage: '',
	},
	{
		step: 15,
		description: text15,
		correctAnswer: '',
		incorrectAnswer: '',
		correctAnswerStep: 16,
		incorrectAnswerStep: 15,
		errorMessage: '',
	},
	{
		step: 16,
		description: text16,
		correctAnswer: '',
		incorrectAnswer: '',
		correctAnswerStep: 1,
		incorrectAnswerStep: 16,
		errorMessage: '',
	},
];
