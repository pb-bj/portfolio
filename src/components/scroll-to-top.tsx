'use client';

import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			setIsVisible(window.scrollY > 300);
		};

		window.addEventListener('scroll', toggleVisibility);
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	if (!isVisible) return null;

	return (
		<Button
			onClick={scrollToTop}
			size="icon"
			className="
				fixed bottom-6 right-6 z-50
				rounded-full shadow-lg
				bg-primary text-primary-foreground
				hover:scale-105 transition-transform
                cursor-pointer
			"
			aria-label="Scroll to top"
		>
			<ArrowUp className="h-4 w-4" />
		</Button>
	);
}
