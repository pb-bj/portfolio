import { Media } from '@/components';
import Image from 'next/image';
export default function Home() {
	return (
		<section className="w-full max-w-3xl mx-auto flex flex-col py-2 px-8 lg:px-0">
			<div className="mt-28 space-y-4">
				<Image src="/images/pranish.png" alt="pranish" width={96} height={96} className="object-contain rounded-full" />
				<h1 className="text-2xl md:text-3xl font-bold  tracking-tight ">
					Namaste, I'm <span className="text-orange-400">Pranish Bajracharya,</span> <br /> Frontend Developer
				</h1>
			</div>
			<p className="mt-4 font-light tracking-tight">
				23-year-old CS student passionate about creating delightful web experiences through thoughtful design and smooth
				interactions. I build with TypeScript, React, Next.js, and Framer Motion always focused on the user.
			</p>

			<Media />
		</section>
	);
}
