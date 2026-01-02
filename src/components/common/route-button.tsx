'use client';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

interface RouteButtonProps {
	icon: LucideIcon;
	url: string;
	label: string;
}

export default function RouteButton({ icon: Icon, url, label }: RouteButtonProps) {
	return (
		<div className="text-center mt-8">
			<Button asChild>
				<Link href={url}>
					{label}
					<Icon size={4} />
				</Link>
			</Button>
		</div>
	);
}
