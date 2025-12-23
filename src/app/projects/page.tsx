import { BackToHome, TitleHeader } from '@/components';
import ProjectComponent from '@/components/project/project-component';
import { Projects as projectData } from '@/constants';

export default function Projects() {
	return (
		<section className="section-container tracking-tight">
			<BackToHome url="/" />
			<TitleHeader title="Projects" totalItems={projectData.length} />
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
