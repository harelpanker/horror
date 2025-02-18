'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { syntaxReference, SyntaxData } from '@/lib/state/data';

import questionMark from '@/app/assets/icons/question-mark.svg';

export function SyntaxReference({ step }: { step: number }) {
	const [syntax, setSyntax] = useState<SyntaxData[]>([]);

	useEffect(() => {
		const filteredSyntax = syntaxReference.filter((item) => item.step < step);
		setSyntax(filteredSyntax);
	}, [step]);

	return (
		<Popover className='fixed bottom-10 left-auto right-6 top-auto z-50 flex w-[90svw] max-w-sm justify-end'>
			<PopoverButton className='rounded-full bg-fuchsia-700 p-4 transition-opacity duration-500 hover:opacity-80 focus-visible:outline-none'>
				<Image className='size-5 invert' src={questionMark} alt='' />
			</PopoverButton>
			<PopoverPanel
				anchor='top end'
				className='relative z-50 flex origin-top flex-col pb-3 transition duration-500 ease-out data-[closed]:scale-95 data-[closed]:opacity-0'>
				<div className='flex w-[90svw] max-w-sm flex-col gap-y-3 rounded-md bg-foreground p-4 text-background'>
					<h4 className='font-spaceGrotesk text-lg font-semibold'>Syntax Reference</h4>

					<ul className='list-disc pl-4 text-sm'>
						{syntax.map((item) =>
							item.syntax.map((syntaxItem, index) => (
								<li key={`${item.step}-${index}`} className='p-1'>
									{syntaxItem}
								</li>
							))
						)}
					</ul>
				</div>
			</PopoverPanel>
		</Popover>
	);
}
