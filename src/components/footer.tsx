export default function Footer() {
	return (
		<footer className="w-full max-w-3xl mx-auto flex flex-col py-4 px-8 lg:px-0 mt-8 border-t border-gray-300 dark:border-gray-700">
			<p className="text-sm font-light tracking-tight text-center">
				&copy; {new Date().getFullYear()} Pranish Bajracharya. All rights reserved.
			</p>
		</footer>
	);
}
