import { JIssue } from "../../interface/issue";
import { JProject } from "../../interface/project";
import { JUser } from "../../interface/user";

export interface IProjectState {
    project: JProject | null;
    error: string | null;
    issues: JIssue[];
    users: JUser[];
}