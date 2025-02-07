'use client';
import React, { useEffect, useState } from 'react';
import { TypingAnimation } from './typing-animation';

const decodeHtmlEntities = (text: string): string => {
	const textArea = document.createElement('textarea');
	textArea.innerHTML = text;
	return textArea.value;
};

const AnimatedTextDisplay = ({
	text,
	step,
	playerName,
	onTypingStart,
	onTypingEnd,
}: {
	text: string;
	step: number;
	playerName?: string;
	onTypingStart?: () => void;
	onTypingEnd?: () => void;
}) => {
	const [key, setKey] = useState(0);
	const [visibleLines, setVisibleLines] = useState<number[]>([]);
	const [lines, setLines] = useState<string[]>([]);

	useEffect(() => {
		const newLines = text
			.split('\n')
			.filter((line) => line.trim())
			.map((line) => decodeHtmlEntities(line))
			.map((line) => line.replace(/<player\.name>/g, playerName || 'Guest'));

		setLines(newLines);
		setVisibleLines([]);
		setKey((prev) => prev + 1);

		let totalDelay = 0;
		const typingSpeed = 50;

		if (onTypingStart) onTypingStart(); // Notify start

		newLines.forEach((line, index) => {
			const lineDelay = line.length * typingSpeed;
			setTimeout(() => {
				setVisibleLines((prev) => [...prev, index]);
				if (index === newLines.length - 1 && onTypingEnd) {
					setTimeout(onTypingEnd, lineDelay); // Notify end after last line
				}
			}, totalDelay);
			totalDelay += lineDelay + 500;
		});
	}, [text, step, playerName]);

	return (
		<div className='flex flex-col gap-y-1'>
			{lines.map((line, index) => {
				const isDialogue = line.trim().startsWith('>>');
				return (
					<div
						key={`${key}-${index}`}
						className={`opacity-0 transition-opacity duration-300 ${isDialogue ? 'text-sky-300' : 'text-emerald-300'}`}
						style={{
							opacity: visibleLines.includes(index) ? 1 : 0,
						}}>
						{visibleLines.includes(index) && <TypingAnimation key={`effect-${key}-${index}`}>{line}</TypingAnimation>}
					</div>
				);
			})}
		</div>
	);
};

export default AnimatedTextDisplay;
