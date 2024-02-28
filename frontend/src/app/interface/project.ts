import { JIssue } from "./issue";
import { JUser } from "./user";

export interface JProject {
    id: string;
    name: string;
    url: string;
    description: string;
    category: ProjectCategory;
    createdAt: string;
    updatedAt: string;
    issues: JIssue[];
    users: JUser[];
}

export enum ProjectCategory {
    SOFTWARE = "Software",
    BUSINESS = "Business",
    MARKETING = "Marketing",
}