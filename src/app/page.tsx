import { Content, Media, Projects, WorkExperience } from '@/components';

export default function Home() {
	return (
		<section className="section-container min-h-screen">
			<Content />
			<Media />
			<WorkExperience />
			<Projects />
		</section>
	);
}
