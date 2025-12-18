import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CodeXml } from 'lucide-react';
import Image from 'next/image';

interface ExperienceComponentProps {
	defaultOpen: boolean;
	src: string;
	company_name: string;
	company_address: string;
	link: string;
	role: string;
	duration: string;
	contributions: string[];
}

export default function ExperienceComponent({
	defaultOpen,
	src,
	company_name,
	company_address,
	link,
	role,
	duration,
	contributions,
}: ExperienceComponentProps) {
	return (
		<div className="flex flex-col pt-6">
			<div className="flex gap-2">
				<Image src={src} alt={company_name} width={40} height={40} className="object-contain rounded-md" />
				<div>
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						className="cursor-pointer hover:text-blue-600 font-semibold transition"
					>
						<h4 className="text-lg">{company_name}</h4>
					</a>
					<p className="text-sm font-light">{company_address}</p>
				</div>
			</div>
			<Accordion type="single" collapsible defaultValue={defaultOpen ? 'item-1' : ''}>
				<AccordionItem value="item-1">
					<AccordionTrigger className="no-underline hover:no-underline cursor-pointer">
						<div className="flex gap-4">
							<div className="flex items-center justify-center w-8 h-8 rounded-full shadow-sm">
								<CodeXml size={20} />
							</div>
							<div>
								<h5 className="text-lg font-semibold">{role}</h5>
								<div className="text-[14px] font-light">{duration}</div>
							</div>
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<div className="flex gap-3">
							<ul className="pl-16">
								{contributions.map((contribution, index) => (
									<li key={index} className="list-disc">
										{contribution}
									</li>
								))}
							</ul>
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}
