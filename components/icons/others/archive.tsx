function ArchiveIcon({ className }: { className?: string }): JSX.Element {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
			<path d="M20 3H4a2 2 0 0 0-2 2v2a2 2 0 0 0 1 1.72V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.72A2 2 0 0 0 22 7V5a2 2 0 0 0-2-2zM4 5h16v2H4zm1 14V9h14v10z"></path>
			<path d="M8 11h8v2H8z"></path>
		</svg>
	)
}

export default ArchiveIcon
