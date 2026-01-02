'use client';
import { blurRevealAnimation } from '@/lib/animation';
import { motion } from 'motion/react';
import Image from 'next/image';

interface Tech {
	name: string;
	icon: string;
	color?: string;
	url: string;
	invertOnDark?: boolean;
}

export default function TechStack() {
	const technologies: Tech[] = [
		{ name: 'Next.js', icon: '/svg/nextjs.svg', url: 'https://nextjs.org/', invertOnDark: true },
		{ name: 'React', icon: '/svg/reactjs.svg', url: 'https://react.dev/' },
		{ name: 'TypeScript', icon: '/svg/typescript.svg', url: 'https://www.typescriptlang.org/' },
		{ name: 'Tailwind CSS', icon: '/svg/tailwindcss.svg', url: 'https://tailwindcss.com/' },
		{ name: 'PostgreSQL', icon: '/svg/pgsql.svg', url: 'https://www.postgresql.org/' },
		{ name: 'Vercel', icon: '/svg/vercel.svg', url: 'https://vercel.com/', invertOnDark: true },
		{ name: 'GitHub', icon: '/svg/github.svg', url: 'https://github.com/', invertOnDark: true },
		{ name: 'Supabase', icon: '/svg/supabase-icon.svg', url: 'https://supabase.com/' },
		{ name: 'Motion.dev', icon: '/svg/motion-dev.svg', url: 'https://motion.dev/' },
	];

	return (
		<section className="w-full py-16">
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-l border-t border-gray-200 dark:border-gray-800">
				{technologies.map((tech) => (
					<div
						key={tech.name}
						className="
							group relative flex h-20 items-center justify-center
							border-r border-b border-gray-200 cursor-pointer dark:border-gray-800
							bg-white dark:bg-background
							hover:bg-gray-50 dark:hover:bg-gray-900
							transition-all duration-300
						"
					>
						<motion.a
							{...blurRevealAnimation}
							href={tech.url}
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center justify-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity"
						>
							<div className="relative h-8 w-8 transition-transform duration-300">
								<Image
									src={tech.icon}
									alt={tech.name}
									fill
									className={`
										object-contain transition-all duration-300
										${tech.invertOnDark ? 'dark:invert' : ''}
									`}
								/>
							</div>
							<span className="text-xs text-gray-600 dark:text-gray-400">{tech.name}</span>
						</motion.a>
					</div>
				))}
			</div>
		</section>
	);
}
