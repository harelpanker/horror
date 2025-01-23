export function Container({ children }: { children: React.ReactNode }) {
	return <div className='container mx-auto max-w-screen-md px-5'>{children}</div>;
}
