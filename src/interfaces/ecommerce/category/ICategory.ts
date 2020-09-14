export interface ICategory {
	id: number;
	name: string;
	slug: string;
	description: string;
	parent: number;
	count: number;
	image: {
		id: number;
		src: string;
	};
}
