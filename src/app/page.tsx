import { Content, Media } from '@/components';

export default function Home() {
	return (
		<section className="w-full max-w-3xl mx-auto flex flex-col py-2 px-8 lg:px-0 min-h-screen">
			<Content />
			<Media />
		</section>
	);
}
