'use client';
import { Projects as projectData } from '@/constants/project-data';
import { blurRevealAnimation } from '@/lib/animation';
import { MoveRight } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import RouteButton from '../common/route-button';
import TitleHeader from '../title-header';
import ProjectComponent from './project-component';

export default function Projects() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	return (
		<motion.section
			ref={ref}
			id="projects"
			className="relative mt-32 tracking-tight scroll-mt-24"
			initial={blurRevealAnimation.initial}
			animate={isInView ? blurRevealAnimation.animate : blurRevealAnimation.initial}
			transition={blurRevealAnimation.transition}
		>
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

			<RouteButton url="/projects" label="All Projects" icon={MoveRight} />
		</motion.section>
	);
}
