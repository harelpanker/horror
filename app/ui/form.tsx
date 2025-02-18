'use client';

// https://www.notion.so/Creating-base-outline-for-Permit-Horror-V3-JSON-mapping-c653b30f7a4542cdb39bda2e38e18e24
import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { Field } from '@headlessui/react';
import { stepsAtom, stepAtom, usernameAtom } from '@/lib/state/app-state';
import AnimatedTextDisplay from '@/app/ui/animated-text-desplay';
import { Input } from '@/app/ui/input';
import { EndGame } from '@/app/ui/end-game';

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
	const [type, setType] = useState(false);
	const [username, setUsername] = useState('');
	const [endGame, setEndGame] = useState(false);
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
				userValueLower === 'gg' ||
				userValueLower === 'ggg';

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
	function handleEndGame() {
		setTimeout(() => {
			if (step === 15) setStep(16);
			if (step === 16) {
				setEndGame(true);
			}
		}, 4500);
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
			default:
				if (userValueNotEmpty) correctAnswer(userValue, step);
				else setError(true);
		}

		setUsername('');
	}

	return (
		<>
			{endGame ? (
				<EndGame />
			) : (
				<form onSubmit={handleSubmit} className='mx-auto w-full max-w-screen-sm'>
					<Field className='flex flex-col gap-y-8'>
						<div className='flex flex-col gap-y-4'>
							<h2 className='text-2xl font-bold text-orange-400'>{state[step].step}</h2>

							<AnimatedTextDisplay
								text={state[step].description}
								step={step}
								playerName={userName}
								onTypingStart={() => setType(true)}
								onTypingEnd={() => {
									setType(false);
									if (step === 15 || step === 16) handleEndGame();
								}}
							/>

							{error && (
								<p className='text-orange-400'>
									{state[step].errorMessage === '' ? '> Unrecognized input' : state[step].errorMessage || ''}
								</p>
							)}
						</div>

						{!type && step !== 15 && step !== 16 ? (
							<Input
								autoFocus
								id='usernameInput'
								type='text'
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						) : null}
					</Field>
				</form>
			)}
		</>
	);
}
