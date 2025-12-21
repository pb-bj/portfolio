export function transformContributionData(calendar: any) {
	return calendar.weeks.flatMap((week: any) =>
		week.contributionDays.map((day: any) => ({
			date: day.date,
			count: day.contributionCount,
			level: day.contributionCount,
		})),
	);
}
