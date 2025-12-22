import { TechStack } from '@/lib/enums/tech-stack.enum';
import { Button } from '../ui/button';
import ProjectComponent from './project-component';

export default function Projects() {
	return (
		<div className="relative mt-32 tracking-tight">
			<h1 className="text-3xl font-bold mb-6">Projects</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-16">
				<ProjectComponent
					project_name="Popcornpix"
					imageSrc="/images/screenshots/popcornpix.png"
					url="https://popcornpix.vercel.app"
					github_url="https://github.com/pb-bj/popcornpix"
					description="Popcornpix is a web-based movie and series discovery platform built with React and Supabase, powered by the TMDB API. It serves as a modern alternative to IMDb and Rotten Tomatoes, letting users explore, search, and save their favorite titles — all in a sleek, responsive UI."
					techstack={[
						TechStack.REACT,
						TechStack.REACT_QUERY,
						TechStack.TMDB_API,
						TechStack.TAILWIND,
						TechStack.SUPABASE,
						TechStack.GOOGLE_AUTH,
						TechStack.SHADCNUI,
						TechStack.VERCEL,
					]}
				/>
				<ProjectComponent
					project_name="Tournaop"
					imageSrc="/images/screenshots/tournaop.png"
					url="https://tournaop.com"
					description=" Tournaop is a comprehensive tournament management platform designed to streamline the organization and execution of e-sports tournaments. Built with Next.js and Tailwind CSS."
					techstack={[TechStack.NEXTJS, TechStack.TAILWIND, TechStack.FRAMER_MOTION, TechStack.SEO]}
				/>
				<ProjectComponent
					project_name="Jhigu Store"
					imageSrc="/images/screenshots/jhigu-store.png"
					url="https://ecommerce-store-lilac-one.vercel.app/"
					github_url="https://github.com/pb-bj/ecommerce-store"
					description=" Jhigu Store is a modern e-commerce web application built with sleek, responsive design, filterization, search for specific products and a user-friendly cart system"
					techstack={[TechStack.REACT, TechStack.SCSS, TechStack.CONTEXT_API]}
				/>
			</div>
			<Button className="flex items-center justify-center mx-auto mt-8 cursor-pointer">Show More</Button>
		</div>
	);
}
