import { PortfolioItem } from "./PortfolioItems";
import { OneOz, MłodyVamp, DajMiCzas, Kolczyki } from "./Video/";

export interface VideoPortfolioItemsType extends Omit<PortfolioItem, "id"> {
	videoSrc: string;
	directedBy: string;
	dop: string;
	editBy: string;
	coverBy: string;
	artist?: string;
	status: "published" | "archived" | "completed";
	duration: string;
	location: string[];
	cameraUsed: string[];
	lensesUsed: string[];
	videoCategory: "MusicVideo";
	ageWarning?: boolean;
}
const VideoPortfolioItems: VideoPortfolioItemsType[] = [
	MłodyVamp,
	OneOz,
	DajMiCzas,
	Kolczyki,
];
export default VideoPortfolioItems;
