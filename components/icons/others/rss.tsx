function RSSIcon({ className }: { className?: string }): JSX.Element {
	return (
		<span className={className}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<path d="M19 20.001C19 11.729 12.271 5 4 5v2c7.168 0 13 5.832 13 13.001h2z"></path>
				<path d="M12 20.001h2C14 14.486 9.514 10 4 10v2c4.411 0 8 3.589 8 8.001z"></path>
				<circle cx="6" cy="18" r="2"></circle>
			</svg>
		</span>
	)
}

export default RSSIcon
