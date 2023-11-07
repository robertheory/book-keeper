export interface Author {
	fuller_name: string;
	links: Link[];
	key: string;
	name: string;
	birth_date: string;
	death_date: string;
	photos: number[];
	personal_name: string;
	alternate_names: string[];
	wikipedia: string;
	type: {
		key: string;
	};
	source_records: string[];
	remote_ids: RemoteIds;
	bio: string;
	latest_revision: number;
	revision: number;
	created: Type;
	last_modified: Type;
}

export interface Link {
	title: string;
	url: string;
	type: Type;
}

export interface RemoteIds {
	viaf: string;
	storygraph: string;
	amazon: string;
	wikidata: string;
	isni: string;
	goodreads: string;
	project_gutenberg: string;
}

export interface Type {
	type: string;
	value: string;
}
