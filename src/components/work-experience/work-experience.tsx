import ExperienceComponent from './experience';

export default function WorkExperience() {
	return (
		<div className="relative mt-32 tracking-tight">
			<h2 className="text-2xl md:text-3xl font-bold">
				<span className="text-lg text-gray-400 dark:text-gray-300/20 leading-0">Professional</span> <br /> Experience
			</h2>

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
				/>

				<ExperienceComponent
					defaultOpen={false}
					src="/svg/plutonic.svg"
					company_name="Plutonic Tech"
					company_address="Thapathali, Kathmandu"
					link="https://www.inflancer.com/"
					role="Frontend (React) Developer Intern"
					duration="Onsite | April 2024 - June 2024"
					contributions={[
						'Built production-level web applications using Next.js, TypeScript, Tailwind CSS, and modern frontend tools',
						'Developed Tournaop, a tournament platform with SEO optimization (robots.txt, sitemap.xml, metadata) and smooth UI animations using Framer Motion.',
						'Implemented fully responsive UI/UX across mobile, tablet, and desktop using Tailwind CSS and reusable design patterns.',
						'Developed a multilingual public health website with Nepali + English support using next-intl, TypeScript, and the App Router.',
						'Built the complete Admin Dashboard + CMS for the health platform, featuring multi-language content management using Redux Toolkit, RTK Query, Tailwind CSS, and Shadcn/ui. Integrated API-driven data workflows and optimized the CMS for fast content updates and admin usability.',
					]}
				/>
			</div>
		</div>
	);
}
