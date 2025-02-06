'use client';
import React, { useEffect, useState } from 'react';
import { TypingAnimation } from './typing-animation';

const decodeHtmlEntities = (text: string): string => {
	const textArea = document.createElement('textarea');
	textArea.innerHTML = text;
	return textArea.value;
};

const AnimatedTextDisplay = ({ text, step }: { text: string; step: number }) => {
	const [key, setKey] = useState(0);
	const [visibleLines, setVisibleLines] = useState<number[]>([]);
	const [lines, setLines] = useState<string[]>([]);

	useEffect(() => {
		const newLines = text
			.split('\n')
			.filter((line) => line.trim())
			.map((line) => decodeHtmlEntities(line));

		setLines(newLines);
		setVisibleLines([]);
		setKey((prev) => prev + 1);

		let totalDelay = 0; // Track cumulative delay for sequential animations
		const typingSpeed = 50; // Approximate typing speed per character (adjust as needed)

		newLines.forEach((line, index) => {
			const lineDelay = line.length * typingSpeed; // Calculate delay based on line length
			setTimeout(() => {
				setVisibleLines((prev) => [...prev, index]);
			}, totalDelay);
			totalDelay += lineDelay + 700; // Add extra delay after each line to simulate natural pauses
		});
	}, [text, step]);

	return (
		<div className='flex flex-col gap-y-1'>
			{lines.map((line, index) => (
				<div
					key={`${key}-${index}`}
					className='opacity-0 transition-opacity duration-300'
					style={{
						opacity: visibleLines.includes(index) ? 1 : 0,
					}}>
					{visibleLines.includes(index) && <TypingAnimation key={`effect-${key}-${index}`}>{line}</TypingAnimation>}
				</div>
			))}
		</div>
	);
};

export default AnimatedTextDisplay;
