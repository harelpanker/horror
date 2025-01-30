import { Section } from '@/app/ui/section';
import { Container } from './ui/container';
import { Form } from './ui/form';

export default function Home() {
	return (
		<Section>
			<Container>
				<div className='flex flex-col gap-y-8'>
					<h1 className='text-balance text-center text-5xl font-bold leading-none opacity-80 sm:text-8xl'>
						Permit Horror loop
					</h1>
					<Form />
				</div>
			</Container>
		</Section>
	);
}
