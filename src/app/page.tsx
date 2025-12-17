import { Content, Media } from '@/components';

export default function Home() {
	return (
		<section className="section-container min-h-screen">
			<Content />
			<Media />

			<div className="relative mt-32 font-semibold tracking-tight">
				<h2 className="text-2xl md:text-3xl font-bold">
					<span className="text-lg text-gray-500">Professional</span> <br /> Experience
				</h2>
			</div>
		</section>
	);
}
