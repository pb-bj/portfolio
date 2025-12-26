import { TechStack } from '@/lib/enums/tech-stack.enum';
import { ProjectTypes } from '@/lib/types/project.type';

export const Projects: ProjectTypes[] = [
	{
		id: 'popcornpix',
		project_name: 'Popcornpix',
		imageSrc: '/images/screenshots/popcornpix.png',
		url: 'https://popcornpix.vercel.app',
		github_url: 'https://github.com/pb-bj/popcornpix',
		description:
			'Popcornpix is a web-based movie and series discovery platform built with React and Supabase, powered by the TMDB API. It serves as a modern alternative to IMDb and Rotten Tomatoes, letting users explore, search, and save their favorite titles — all in a sleek, responsive UI.',
		techstack: [
			TechStack.REACT,
			TechStack.TYPESCRIPT,
			TechStack.REACT_QUERY,
			TechStack.TMDB_API,
			TechStack.TAILWIND,
			TechStack.SUPABASE,
			TechStack.GOOGLE_AUTH,
			TechStack.SHADCNUI,
			TechStack.VERCEL,
		],
	},
	{
		id: 'tournaop',
		project_name: 'Tournaop',
		imageSrc: '/images/screenshots/tournaop.png',
		url: 'https://tournaop.com',
		description:
			' Tournaop is a comprehensive tournament management platform designed to streamline the organization and execution of e-sports tournaments. Built with Next.js and Tailwind CSS.',
		techstack: [TechStack.NEXTJS, TechStack.TYPESCRIPT, TechStack.TAILWIND, TechStack.FRAMER_MOTION, TechStack.SEO],
	},
	{
		id: 'pranish-portfolio',
		project_name: 'Pranish Portfolio',
		imageSrc: '/images/screenshots/portfolio.png',
		url: 'https://pranishbajracharya.vercel.app/',
		github_url: 'https://github.com/pb-bj/portfolio',
		description:
			'A modern personal portfolio built with Next.js and TypeScript, showcasing projects, work experience, and technical skills with a strong focus on performance, accessibility, and clean UI. Designed using Tailwind CSS and shadcn/ui, with responsive layouts, smooth interactions, and dark mode support.',

		techstack: [TechStack.NEXTJS, TechStack.TYPESCRIPT, TechStack.TAILWIND, TechStack.SHADCNUI],
	},
	{
		id: 'jhigu-store',
		project_name: 'Jhigu Store',
		imageSrc: '/images/screenshots/jhigu-store.png',
		url: 'https://ecommerce-store-lilac-one.vercel.app/',
		github_url: 'https://github.com/pb-bj/ecommerce-store',
		description:
			' Jhigu Store is a modern e-commerce web application built with sleek, responsive design, filterization, search for specific products and a user-friendly cart system',
		techstack: [TechStack.REACT, TechStack.JAVASCRIPT, TechStack.SCSS, TechStack.CONTEXT_API],
	},
];
