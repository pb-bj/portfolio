import { Projects as projectData } from '@/constants/project-data';
import Link from 'next/link';
import TitleHeader from '../title-header';
import { Button } from '../ui/button';
import ProjectComponent from './project-component';

export default function Projects() {
	return (
		<section id="projects" className="relative mt-32 tracking-tight scroll-mt-24">
			<TitleHeader title="Projects" totalItems={projectData.length} />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-16">
				{projectData.slice(0, 4).map((project) => (
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
				<Button className="flex items-center justify-center mx-auto mt-8 cursor-pointer">All Projects</Button>
			</Link>
		</section>
	);
}
