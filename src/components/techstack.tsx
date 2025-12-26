// import Image from 'next/image';

// interface Tech {
// 	name: string;
// 	icon: string;
// 	color?: string;
// 	inverDarkMode?: false;
// }

// export default function TechStack() {
// 	const technologies: Tech[] = [
// 		{ name: 'Next.js', icon: '/svg/nextjs.svg', color: '#000000' },
// 		{ name: 'React', icon: '/svg/reactjs.svg', color: '#61DAFB' },
// 		{ name: 'TypeScript', icon: '/svg/typescript.svg', color: '#3178C6' },
// 		{ name: 'Tailwind CSS', icon: '/svg/tailwindcss.svg', color: '#06B6D4' },
// 		{ name: 'PostgreSQL', icon: '/svg/pgsql.svg', color: '#4169E1' },
// 		{ name: 'Vercel', icon: '/svg/vercel.svg', color: '#000000' },
// 		{ name: 'Github', icon: '/svg/github.svg' },
// 	];

// 	return (
// 		<section className="w-full py-16">
// 			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border-l border-t border-gray-200 dark:border-gray-800">
// 				{technologies.map((tech, index) => (
// 					<div
// 						key={index}
// 						className="group relative flex items-center justify-center h-20 border-r border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all duration-300"
// 					>
// 						<div className="flex flex-col items-center justify-center gap-3 opacity-90 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
// 							<div className="relative w-8 h-8">
// 								<Image src={tech.icon} alt={tech.name} fill className="object-contain transition-all duration-300" />
// 							</div>
// 						</div>
// 					</div>
// 				))}
// 			</div>
// 		</section>
// 	);
// }

import Image from 'next/image';

interface Tech {
	name: string;
	icon: string;
	color?: string;
	invertOnDark?: boolean;
}

export default function TechStack() {
	const technologies: Tech[] = [
		{ name: 'Next.js', icon: '/svg/nextjs.svg', invertOnDark: true },
		{ name: 'React', icon: '/svg/reactjs.svg' },
		{ name: 'TypeScript', icon: '/svg/typescript.svg' },
		{ name: 'Tailwind CSS', icon: '/svg/tailwindcss.svg' },
		{ name: 'PostgreSQL', icon: '/svg/pgsql.svg' },
		{ name: 'Vercel', icon: '/svg/vercel.svg', invertOnDark: true },
		{ name: 'GitHub', icon: '/svg/github.svg', invertOnDark: true },
		{ name: 'Supabase', icon: '/svg/supabase-icon.svg' },
	];

	return (
		<section className="w-full py-16">
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-l border-t border-gray-200 dark:border-gray-800">
				{technologies.map((tech) => (
					<div
						key={tech.name}
						className="
							group relative flex h-20 items-center justify-center
							border-r border-b border-gray-200 dark:border-gray-800
							bg-white dark:bg-background
							hover:bg-gray-50 dark:hover:bg-gray-900
							transition-all duration-300
						"
					>
						<div className="flex flex-col items-center justify-center gap-2 opacity-90 group-hover:opacity-100 transition-opacity">
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
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
