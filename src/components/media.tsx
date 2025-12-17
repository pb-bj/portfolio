import { File, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Media() {
	return (
		<div className="pt-3">
			<ul className="flex flex-wrap gap-8 md:gap-6 mt-2.5 text-sm tracking-tight font-medium lowercase">
				<li className=" hover:underline transition ease-linear duration-100 cursor-pointer">
					<Link href={'/resume'} className="flex justify-baseline gap-2">
						<File size={22} />
						<span className="hidden md:block">resume</span>
					</Link>
				</li>
				<li className="hover:underline transition ease-linear duration-100 cursor-pointer">
					<a
						className="flex gap-2 justify-baseline"
						href="https://www.linkedin.com/in/pranish-bj"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image src="/svg/linkedin.svg" alt="linkedin" width={22} height={22} className="object-contain" />
						<span className="hidden md:block">linkedin</span>
					</a>
				</li>
				<li className="hover:underline transition ease-linear duration-100 cursor-pointer">
					<a
						className="flex gap-2 justify-baseline"
						href="https://github.com/pb-bj"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image src="/svg/github.svg" alt="github" width={22} height={22} className="object-contain dark:invert" />
						<span className="hidden md:block">github</span>
					</a>
				</li>
				<li className="hover:underline transition ease-linear duration-100 cursor-pointer">
					<a
						className="flex gap-2 justify-baseline"
						href="https://x.com/pbjrzzz"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image src="/svg/x.svg" alt="twitter" width={22} height={22} className="object-contain dark:text-white" />
						<span className="hidden md:block">twitter</span>
					</a>
				</li>
				<li className=" hover:underline transition ease-linear duration-100 cursor-pointer">
					<a className="flex justify-baseline gap-2" href="mailto:pranish2017bajracharya@gmail.com">
						<Mail size={22} />
						<span className="hidden md:block">mail</span>
					</a>
				</li>
			</ul>
		</div>
	);
}
