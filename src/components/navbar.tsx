'use client';
import { menuItems } from '@/constants';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function Navbar() {
	const { setTheme } = useTheme();

	return (
		<header className="mx-auto px-8 sticky top-0 z-50 py-4 backdrop-blur-sm">
			<nav className="flex justify-between max-w-3xl mx-auto pt-4">
				<ul className="flex gap-3.5">
					{menuItems.map((item) => (
						<li key={item.id} className="cursor-pointer">
							<a href={`#${item.id}`}>{item.title}</a>
						</li>
					))}
				</ul>
				<Moon size={18} className="hidden dark:block cursor-pointer" onClick={() => setTheme('light')} />
				<Sun size={18} className="dark:hidden cursor-pointer" onClick={() => setTheme('dark')} />
			</nav>
		</header>
	);
}
