import { PortfolioCategories } from "../constant/data";

export type CategoryType = (typeof PortfolioCategories)[number]["name"];
