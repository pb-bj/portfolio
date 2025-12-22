export interface BaseProjectType {
	project_name: string;
	imageSrc: string;
	url: string;
	github_url?: string;
	description?: string;
	techstack: string[];
}

export interface ProjectTypes extends BaseProjectType {
	id: string;
}
