'use client';

// https://www.notion.so/Creating-base-outline-for-Permit-Horror-V3-JSON-mapping-c653b30f7a4542cdb39bda2e38e18e24
import clsx from 'clsx';
import { useAtom } from 'jotai';
import { useState } from 'react';
import { Description, Field, Input, Label } from '@headlessui/react';
import { stepsAtom, stepAtom, usernameAtom } from '@/lib/state/app-state';

interface FormElements extends HTMLFormControlsCollection {
	usernameInput: HTMLInputElement;
}
interface FormElement extends HTMLFormElement {
	readonly elements: FormElements;
}

export function Form() {
	const [error, setError] = useState(false);
	const [username, setUsername] = useState('');
	const [userName, setUserNameAtom] = useAtom(usernameAtom);
	const [step, setStep] = useAtom(stepAtom);
	const [state] = useAtom(stepsAtom);

	function correctAnswer(userValue: string, step: number, allWrong = false) {
		setError(false);
		if (userValue.toLowerCase() === state[step].correctAnswer.toLowerCase()) {
			setStep(state[step].correctAnswerStep);
		} else if (userValue.toLowerCase() === state[step].incorrectAnswer.toLowerCase()) {
			setStep(state[step].incorrectAnswerStep);
		} else if (allWrong) {
			setStep(state[step].incorrectAnswerStep);
		}
	}

	function handleSubmit(event: React.FormEvent<FormElement>) {
		event.preventDefault();
		const userValue = event.currentTarget.elements.usernameInput.value;
		const userValueNotEmpty = userValue !== '';

		switch (step) {
			case 0:
				setError(true);
				if (step === 0 && userValueNotEmpty) {
					setError(false);
					setUserNameAtom(userValue);
					setStep(1);
				}
				break;
			case 1:
				userValueNotEmpty ? correctAnswer(userValue, step) : setError(true);
				break;
			case 2:
				userValueNotEmpty ? correctAnswer(userValue, step) : setError(true);
				break;
			case 3:
				userValueNotEmpty ? correctAnswer(userValue, step) : setError(true);
				break;
			case 4:
				userValueNotEmpty ? correctAnswer(userValue, step, true) : setError(true);
				break;
			case 5:
				userValueNotEmpty ? correctAnswer(userValue, step) : setError(true);
				break;
			case 6:
				userValueNotEmpty ? correctAnswer(userValue, step) : setError(true);
				break;
			default:
			// code block
		}

		setUsername('');
	}
	return (
		<form onSubmit={handleSubmit}>
			<Field>
				<Label htmlFor='formAnswer' className='text-sm/6 font-medium text-white'>
					{state[step].step}
				</Label>
				{step === 1 && <p className='whitespace-pre-line text-sm/6 text-white/50'>{'>> Hi ' + userName}</p>}
				<Description
					className='whitespace-pre-line text-sm/6 text-white/50'
					dangerouslySetInnerHTML={{ __html: state[step].description }}
				/>

				{/* error */}
				{error && (
					<p className='whitespace-pre-line text-sm/6 text-white/50'>
						{state[step].errorMessage === '' ? '> Unrecognized input' : state[step].errorMessage || ''}
					</p>
				)}

				<Input
					id='usernameInput'
					type='text'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className={clsx(
						'mt-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white',
						'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
					)}
				/>
			</Field>
		</form>
	);
}
