import { Link } from 'lucide-react';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

interface ProjectComponentProps {
	project_name: string;
	imageSrc: string;
	url: string;
	github_url?: string;
	description?: string;
	techstack: string[];
}
export default function ProjectComponent({
	project_name,
	imageSrc,
	url,
	github_url,
	description,
	techstack,
}: ProjectComponentProps) {
	return (
		<div>
			<Image src={imageSrc} alt={project_name} width={400} height={370} className="object-contain rounded-md" />
			<div className="flex justify-between mt-6">
				<h3 className="text-xl font-semibold">{project_name}</h3>
				<div className="flex items-center gap-3 cursor-pointer">
					<Tooltip>
						<TooltipTrigger asChild>
							<a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
								<Link size={18} />
							</a>
						</TooltipTrigger>
						<TooltipContent>Link</TooltipContent>
					</Tooltip>
					<Tooltip>
						<TooltipTrigger asChild>
							<a href={github_url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
								<Image
									src="/svg/github.svg"
									alt="external link"
									width={18}
									height={18}
									className="object-contain dark:invert"
								/>
							</a>
						</TooltipTrigger>
						<TooltipContent>Github</TooltipContent>
					</Tooltip>
				</div>
			</div>
			<p className="my-2 text-sm text-gray-800 dark:text-gray-400">{description}</p>
			<ul>
				{techstack?.length > 0 &&
					techstack.map((tech, index) => (
						<li key={index} className="inline-block mr-2 mt-2 px-2 py-1 bg-gray-200 dark:bg-gray-800 text-xs rounded">
							{tech}
						</li>
					))}
			</ul>
		</div>
	);
}
