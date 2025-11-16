import { modelType } from "./model.type";

export type imgArrayPhoto = {
	id: number;
	title: string;
	src: string;
	model?: modelType[];
	date?: string;
	iso?: string;
	aperture?: string;
	shutterSpeed?: string;
};
