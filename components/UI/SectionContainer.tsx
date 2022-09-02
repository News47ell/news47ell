const SectionContainer = ({ children }) => {
	return (
		<main className="container mx-auto mb-8 flex max-w-5xl flex-1 flex-col gap-y-5 px-3 print:h-screen print:items-center print:justify-center">
			{children}
		</main>
	)
}

export default SectionContainer
