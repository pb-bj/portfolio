// import { getGithubContributions } from "@/lib/api/github";
// import { transformContributionData } from "@/lib/api/github-transform";
// import { Activity, ContributionGraph } from "./kibo-ui/contribution-graph";

// export default async function GithubContribution() {
//     const calendar = await getGithubContributions(process.env.GITHUB_USERNAME!);
//     const data = transformContributionData(calendar);

//     return (
// 			<section className="space-y-4">
// 				<h2 className="text-xl font-semibold">GitHub Contributions</h2>

// 				<ContributionGraph
// 					data={data}
// 					labels={{
// 						totalCount: `${calendar.totalContributions} contributions in the last year`,
// 					}}
// 				>
//                 {(activity: { date: string;  count: number}) : React.ReactNode => (
// 						<div
// 							title={`${activity.count} contributions on ${activity.date}`}
// 							className="h-full w-full rounded-sm bg-emerald-500"
// 						/>
// 					)}
// 				</ContributionGraph>
// 			</section>
// 		);
// }

'use client';

import {
	ContributionGraph,
	ContributionGraphBlock,
	ContributionGraphCalendar,
} from '@/components/kibo-ui/contribution-graph';
import { getGithubContributions } from '@/lib/api/github';
import { transformContributionData } from '@/lib/api/github-transform';
import { useEffect, useState } from 'react';

type Activity = { date: string; count: number; level: number };

export default function GithubContribution() {
	const [data, setData] = useState<Activity[]>([]);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const calendar = await getGithubContributions(process.env.GITHUB_USERNAME!);
				setTotal(calendar.totalContributions);
				setData(transformContributionData(calendar));
			} catch (err) {
				console.error(err);
			}
		};

		fetchData();
	}, []);

	if (!data.length) return <p>Loading GitHub contributions...</p>;

	return (
		<section className="space-y-4">
			<h2 className="text-xl font-semibold">GitHub Contributions</h2>

			<ContributionGraph data={data}>
				<ContributionGraphCalendar hideMonthLabels>
					{({ activity, dayIndex, weekIndex }) => (
						<ContributionGraphBlock
							key={`${activity.date}-${weekIndex}`}
							activity={activity}
							dayIndex={dayIndex}
							weekIndex={weekIndex}
						/>
					)}
				</ContributionGraphCalendar>
			</ContributionGraph>

			<p className="text-sm mt-2">{total} contributions in the last year</p>
		</section>
	);
}
