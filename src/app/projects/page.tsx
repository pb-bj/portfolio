import ProjectComponent from '@/components/project/project-component';
import { Projects as projectData } from '@/constants';
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';

export default function Projects() {
	return (
		<section className="section-container tracking-tight">
			<Link href="/" className="flex items-center gap-1.5 mt-16 mb-6 text-sm text-gray-600 dark:text-gray-400">
				<MoveLeft size={16} />
				Back to home
			</Link>
			<h1 className="text-3xl font-bold mb-6">
				Projects <span className="text-[16px] text-gray-500 dark:text-gray-400">({projectData.length})</span>
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-16">
				{projectData.map((project) => (
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
		</section>
	);
}
