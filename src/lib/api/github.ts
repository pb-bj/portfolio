export async function getGithubContributions(username: string) {
	try {
		const query = `
        query($login: String!) {
            user(login: $login) {
                contributionsCollection {
                    contributionCalendar {
                        totalContributions
                        weeks {
                            contributionDays {
                                date
                                contributionCount
                            }
                        }
                    }
                }
            }
        }
        `;

		const res = await fetch(`${process.env.GITHUB_API}`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				query,
				variables: { login: username },
			}),
			next: { revalidate: 86400 }, // cache for 1 day
		});

		if (!res.ok) {
			const text = await res.text();
			throw new Error(`Github api error, ${text}`);
		}

		const json = await res.json();

		return json.data.user.contributionsCollection.contributionCalendar;
	} catch (error) {
		console.error('Failed to fetch github contribution', error);
		return null;
	}
}
