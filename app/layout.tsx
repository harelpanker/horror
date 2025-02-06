import type { Metadata } from 'next';
import { Inconsolata } from 'next/font/google';
import './globals.css';

const inconsolata = Inconsolata({
	variable: '--font-inconsolata',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Horror Loop App',
	description: '',
};

type LayoutProps = { children: React.ReactNode };

export default function RootLayout({ children }: Readonly<LayoutProps>) {
	return (
		<html lang='en' dir='ltr'>
			<body className={`${inconsolata.variable} font-inconsolata antialiased`}>
				<main className='relative z-20'>{children}</main>
				{/* <BackgroundAnimation /> */}
			</body>
		</html>
	);
}
