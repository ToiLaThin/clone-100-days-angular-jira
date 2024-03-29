import { IssuePriority, IssueType } from "../../interface/issue";
import { IssuePriorityIcon } from "../../interface/issue-priority-icon";

export class IssueUtil {
    //util is helper to transform the data, do some operation on the data
    static getIssueTypeIcon(issueType: IssueType): string {
        return issueType?.toLowerCase(); //lowercase the issue type
    }

    static getIssuePriorityIcon(issuePriority: IssuePriority): IssuePriorityIcon {
        return new IssuePriorityIcon(issuePriority);
    }

    static getRandomId(): string {
        return `${Math.ceil(Math.random() * 8000)}`;        
    }

    static searchString(str: string, searchString: string): boolean {
        str = str ?? '';
        searchString = searchString ?? '';
        return str.trim().toLowerCase().includes(searchString.trim().toLowerCase())
    }
}