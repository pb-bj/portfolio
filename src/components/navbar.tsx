'use client';
import { menuItems } from '@/constants';
import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
	const [isDarkMode, setIsDarkMode] = useState(true);

	const handleToggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<header className="mx-auto px-8 sticky top-0 z-50 py-4 backdrop-blur-sm">
			<nav className="flex justify-between max-w-3xl mx-auto pt-4">
				<ul className="flex gap-3.5">
					{menuItems.map((item) => (
						<li key={item.id}>{item.title}</li>
					))}
				</ul>
				{isDarkMode ? (
					<Moon className="cursor-pointer" onClick={handleToggleDarkMode} />
				) : (
					<Sun className="cursor-pointer" />
				)}
			</nav>
		</header>
	);
}
