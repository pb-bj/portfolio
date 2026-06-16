'use client';
import { blurRevealAnimation } from '@/lib/animation';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function Content() {
	return (
		<>
			<motion.div {...blurRevealAnimation} className="mt-28 space-y-4">
				<Image
					src={'/images/pranish.png'}
					alt="pranish"
					width={96}
					height={96}
					className="dark:hidden object-fill rounded-full"
				/>
				<Image
					src={'/images/smile_pranish.png'}
					alt="pranish"
					width={96}
					height={96}
					className="hidden dark:block object-contain rounded-full"
				/>
				<h1 className="text-2xl md:text-3xl font-bold tracking-tight">Pranish Bajracharya</h1>
			</motion.div>
			<motion.p {...blurRevealAnimation} className="mt-4 font-light tracking-tighter">
				Software Developer focused on building scalable web and mobile applications. I work with TypeScript, React, Next.js, Node.js to build clean, performant, and user-focused products. I enjoy working across both frontend and backend systems and improving how applications are designed and delivered.

			</motion.p>
		</>
	);
}
