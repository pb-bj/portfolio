import { Projects as projectData } from '@/constants/project-data';
import Link from 'next/link';
import { Button } from '../ui/button';
import ProjectComponent from './project-component';

export default function Projects() {
	return (
		<div className="relative mt-32 tracking-tight">
			<h1 className="text-3xl font-bold mb-6">
				Projects <span className="text-[16px] text-gray-500 dark:text-gray-400">({projectData.length})</span>
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-16">
				{projectData.slice(0, 3).map((project) => (
					<div key={project.id}>
						<ProjectComponent
							project_name={project.project_name}
							imageSrc={project.imageSrc}
							url={project.url}
							github_url={project.github_url}
							description={project.description}
							techstack={project.techstack}
						/>
					</div>
				))}
			</div>
			<Link href="/projects">
				<Button className="flex items-center justify-center mx-auto mt-8 cursor-pointer">Show More</Button>
			</Link>
		</div>
	);
}
