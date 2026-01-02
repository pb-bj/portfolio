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
				23-year-old CS student passionate about creating delightful web experiences through thoughtful design and smooth
				interactions. I build with <strong>TypeScript, React, Next.js, Nest.js and Framer Motion. </strong>
			</motion.p>
		</>
	);
}
