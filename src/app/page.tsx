import { Content, Media, Projects, WorkExperience } from '@/components';
import TechStack from '@/components/techstack';

export default function Home() {
	return (
		<section className="section-container min-h-screen">
			<Content />
			<Media />
			<TechStack />
			<WorkExperience />
			<Projects />
		</section>
	);
}
