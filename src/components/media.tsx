import { File } from 'lucide-react';
import Image from 'next/image';

export default function Media() {
	return (
		<div className="pt-3">
			<ul className="flex gap-4 mt-2.5 text-sm tracking-tight font-medium lowercase">
				<li className="flex items-center gap-1.5 hover:text-orange-400 hover:underline transition ease-linear duration-100 cursor-pointer">
					<File size={18} />
					resume
				</li>
				<li className="flex items-center gap-1.5 hover:text-orange-400 hover:underline transition ease-linear duration-100 cursor-pointer">
					<Image src="/svg/linkedin.svg" alt="linkedin" width={18} height={18} className="object-contain" />
					linkedin
				</li>
				<li>github</li>
				<li>twitter</li>
				<li>email</li>
			</ul>
		</div>
	);
}
