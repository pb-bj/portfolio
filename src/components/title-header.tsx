interface TitleHeader {
	title: string;
	totalItems: number;
	highlightTitle?: string;
}

export default function TitleHeader({ title, totalItems, highlightTitle }: TitleHeader) {
	return (
		<>
			<h1 className="text-2xl md:text-3xl font-bold mb-6">
				<span className="text-lg text-gray-400 dark:text-gray-300/20 leading-0">{highlightTitle}</span> <br />
				{title}{' '}
				{totalItems !== 0 && <span className="text-[16px] text-gray-500 dark:text-gray-400"> ({totalItems})</span>}
			</h1>
		</>
	);
}
