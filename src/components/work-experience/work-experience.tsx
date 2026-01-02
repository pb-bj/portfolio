'use client';
import { blurRevealAnimation } from '@/lib/animation';
import { TechStack } from '@/lib/enums/tech-stack.enum';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import TitleHeader from '../title-header';
import ExperienceComponent from './experience';

export default function WorkExperience() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

	return (
		<motion.section
			id="work"
			ref={ref}
			initial={blurRevealAnimation.initial}
			animate={isInView ? blurRevealAnimation.animate : blurRevealAnimation.initial}
			transition={blurRevealAnimation.transition}
			className="relative mt-32 tracking-tight scroll-mt-28"
		>
			<TitleHeader highlightTitle="Professional" title="Experience" totalItems={0} />
			<div>
				<ExperienceComponent
					defaultOpen={true}
					src="/svg/inflancer.svg"
					company_name="Inflancer Technology"
					company_address="Gwarko, Lalitpur"
					link="https://www.inflancer.com/"
					role="Next.js Developer Intern"
					duration="Remote | Aug 2025 - Nov 2025"
					contributions={[
						'Built production-level web applications using Next.js, TypeScript, Tailwind CSS, and modern frontend tools',
						'Developed Tournaop, a tournament platform with SEO optimization (robots.txt, sitemap.xml, metadata) and smooth UI animations using Framer Motion.',
						'Implemented fully responsive UI/UX across mobile, tablet, and desktop using Tailwind CSS and reusable design patterns.',
						'Developed a multilingual public health website with Nepali + English support using next-intl, TypeScript, and the App Router.',
						'Built the complete Admin Dashboard + CMS for the health platform, featuring multi-language content management using Redux Toolkit, RTK Query, Tailwind CSS, and Shadcn/ui. Integrated API-driven data workflows and optimized the CMS for fast content updates and admin usability.',
					]}
					techstack={[
						TechStack.NEXTJS,
						TechStack.TYPESCRIPT,
						TechStack.TAILWIND,
						TechStack.SHADCNUI,
						TechStack.FRAMER_MOTION,
						TechStack.REDUX_TOOLKIT,
						TechStack.RTK_QUERY,
						TechStack.NEXT_INTL,
					]}
				/>

				<ExperienceComponent
					defaultOpen={false}
					src="/svg/plutonic.svg"
					company_name="Plutonic Tech"
					company_address="Thapathali, Kathmandu"
					link="https://plutonictech.com/"
					role="Frontend Developer Intern"
					duration="Onsite | Feb 2024 - April 2024"
					contributions={[
						'Built a responsive e-commerce store using React.js & Context API (add-to-cart, wishlist, filtering, search) Designed UI/UX with SCSS',
						'Collaborated on projects & presented progress',
						'Supported WordPress development & CRM system design',
						'Explored Jira plugin development',
					]}
					techstack={[TechStack.REACT, TechStack.JAVASCRIPT, TechStack.TAILWIND, TechStack.SCSS, TechStack.NODE]}
				/>
			</div>
		</motion.section>
	);
}
