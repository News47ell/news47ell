function PauseIcon({ className }: { className?: string }): JSX.Element {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
			<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path>
			<path d="M13 9h2v6h-2zM9 9h2v6H9z"></path>
		</svg>
	)
}

export default PauseIcon
