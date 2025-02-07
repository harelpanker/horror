import { Container } from '@/app/ui/container';
import { GlowEffect } from '@/app/ui/glow-effect';

export function EndGame() {
	const href = 'https://app.permit.io/';
	return (
		<Container>
			<div className='flex grow flex-col items-center justify-center gap-y-8 text-balance text-center font-spaceGrotesk text-2xl font-semibold lg:text-4xl'>
				<h1>Don&apos;t want to be stuck in an infinite authorization loop?</h1>
				<div className='group relative'>
					<GlowEffect
						colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
						mode='colorShift'
						blur='soft'
						duration={9}
						scale={1}
						className='top-0.5 rounded-full transition duration-300 group-hover:scale-[1.02]'
					/>
					<a
						href={href}
						target='_blank'
						rel='noopener noreferrer'
						className='relative inline-flex items-center rounded-full bg-slate-950 px-6 py-2 text-lg text-slate-50 outline outline-1 outline-[#fff2f21f]'>
						Try Permit.io
					</a>
				</div>
			</div>
		</Container>
	);
}
