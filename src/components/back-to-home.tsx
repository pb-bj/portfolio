import { MoveLeft } from 'lucide-react';
import Link from 'next/link';

interface BaseToHomeProps {
	url: string;
}

export default function BackToHome({ url }: BaseToHomeProps) {
	return (
		<Link href={url} className="flex items-center gap-1.5 mt-16 mb-6 text-sm text-gray-600 dark:text-gray-400">
			<MoveLeft size={16} />
			Back to home
		</Link>
	);
}
