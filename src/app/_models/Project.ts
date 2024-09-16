import { Tag } from "./Tag";

export interface Project {
    id: number;
    name: string;
    summary: string;
    description: string;
    projectLinks: string[],
    pictures: string[];
    tags: Tag[];
}