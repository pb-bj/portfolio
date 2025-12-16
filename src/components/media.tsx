import { File, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Media() {
	return (
		<div className="pt-3">
			<ul className="flex flex-wrap gap-2.5 md:gap-4 mt-2.5 text-sm tracking-tight font-medium lowercase">
				<li className="flex justify-baseline gap-1 hover:underline transition ease-linear duration-100 cursor-pointer">
					<File size={18} />
					resume
				</li>
				<li className="hover:underline transition ease-linear duration-100 cursor-pointer">
					<a
						className="flex gap-1 justify-baseline"
						href="https://www.linkedin.com/in/pranish-bj"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image src="/svg/linkedin.svg" alt="linkedin" width={18} height={18} className="object-contain" />
						linkedin
					</a>
				</li>
				<li className="hover:underline transition ease-linear duration-100 cursor-pointer">
					<a
						className="flex gap-1 justify-baseline"
						href="https://github.com/pb-bj"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image src="/svg/github.svg" alt="linkedin" width={22} height={22} className="object-contain" />
						github
					</a>
				</li>
				<li className="hover:underline transition ease-linear duration-100 cursor-pointer">
					<a
						className="flex gap-1 justify-baseline"
						href="https://x.com/pbjrzzz"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image src="/svg/x.svg" alt="linkedin" width={18} height={18} className="object-contain" />
						twitter
					</a>
				</li>
				<li className=" hover:underline transition ease-linear duration-100 cursor-pointer">
					<a className="flex justify-baseline gap-1" href="mailto:pranish2017bajracharya@gmail.com">
						<Mail size={20} />
						mail
					</a>
				</li>
			</ul>
		</div>
	);
}
