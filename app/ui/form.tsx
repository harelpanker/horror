'use client';

// https://www.notion.so/Creating-base-outline-for-Permit-Horror-V3-JSON-mapping-c653b30f7a4542cdb39bda2e38e18e24
import { useAtom } from 'jotai';
import { useState } from 'react';
import { Field } from '@headlessui/react';
import { stepsAtom, stepAtom, usernameAtom } from '@/lib/state/app-state';
import AnimatedTextDisplay from '@/app/ui/animated-text-desplay';
import { Input } from './input';

interface FormElements extends HTMLFormControlsCollection {
	usernameInput: HTMLInputElement;
}
interface FormElement extends HTMLFormElement {
	readonly elements: FormElements;
}

export function Form() {
	const [userAnswer, setUserAnswer] = useState('');
	const [error, setError] = useState(false);
	const [state7, setState7] = useState(false);
	const [state15, setState15] = useState(false);
	const [username, setUsername] = useState('');
	const [userName, setUserNameAtom] = useAtom(usernameAtom);
	const [step, setStep] = useAtom(stepAtom);
	const [state] = useAtom(stepsAtom);

	function correctAnswer(userValue: string, step: number) {
		setError(false);
		if (userValue.toLowerCase() === state[step].correctAnswer.toLowerCase() || userValue.toLowerCase() === 'gg') {
			setStep(state[step].correctAnswerStep);
		} else if (userValue.toLowerCase() === state[step].incorrectAnswer.toLowerCase()) {
			setStep(state[step].incorrectAnswerStep);
		} else if (state[step].incorrectAnswer === '') {
			setStep(state[step].incorrectAnswerStep);
		}
	}
	function handleStep0(userValue: string) {
		const userValueNotEmpty = userValue !== '';
		setError(true);
		if (step === 0 && userValueNotEmpty) {
			setError(false);
			setUserNameAtom(userValue);
			setStep(1);
		}
	}
	function handleStep7(userValue: string) {
		const userValueNotEmpty = userValue !== '';
		setError(true);

		if (userValueNotEmpty) {
			const userValueLower = userValue.toLowerCase(); // use Value

			const isNewAnswer = userAnswer !== userValueLower;
			const isCorrectAnswer =
				userValueLower === state[7].correctAnswer.toLowerCase() ||
				userValueLower === state[7].correctAnswer2?.toLowerCase() ||
				userValueLower === 'gg';

			if (!state7 && isCorrectAnswer) {
				setUserAnswer(userValue);
				setState7(true);
				setError(false);
			} else if (state7 && isNewAnswer && isCorrectAnswer) {
				setStep(state[7].correctAnswerStep);
				setError(false);
			} else {
				setStep(state[7].incorrectAnswerStep);
			}
		} else {
			setError(true);
		}
	}
	function handleStep15(userValue: string) {
		// i want it to happen after the typing animation ends
		setTimeout(() => {
			correctAnswer(userValue, step);
		}, 3000);
	}
	function handleStep16(userValue: string) {
		setError(false);
		setUserNameAtom(userValue);
		setStep(1);
	}

	function handleSubmit(event: React.FormEvent<FormElement>) {
		event.preventDefault();
		const userValue = event.currentTarget.elements.usernameInput.value;
		const userValueNotEmpty = userValue !== '';

		switch (step) {
			case 0:
				handleStep0(userValue);
				break;
			case 7:
				handleStep7(userValue);
				break;
			case 15:
				handleStep15(userValue);
				break;
			case 16:
				handleStep16(userValue);
				break;
			default:
				if (userValueNotEmpty) correctAnswer(userValue, step);
				else setError(true);
		}

		setUsername('');
	}
	return (
		<form onSubmit={handleSubmit} className='mx-auto w-full max-w-screen-sm'>
			<Field className='flex flex-col gap-y-8'>
				<div className='flex flex-col gap-y-4'>
					<h2 className='text-2xl font-bold text-orange-400'>{state[step].step}</h2>

					<AnimatedTextDisplay text={state[step].description} step={step} playerName={userName} />

					{error && (
						<p className='text-orange-400'>
							{state[step].errorMessage === '' ? '> Unrecognized input' : state[step].errorMessage || ''}
						</p>
					)}
				</div>

				{step !== 15 ? (
					<Input id='usernameInput' type='text' value={username} onChange={(e) => setUsername(e.target.value)} />
				) : null}
			</Field>
		</form>
	);
}
