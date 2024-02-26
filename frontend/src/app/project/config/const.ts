import { IssuePriority, IssueType } from "../../interface/issue";
import { IssuePriorityIcon } from "../../interface/issue-priority-icon";
import { IssueTypeWithIcon } from "../../interface/issue-type-icon";
import { IssueUtil } from "../utils/issue";

export class ProjectConst {
    //this class will hold all the constants used in the project
    //const use utils to get the priority icon, type icon
    static readonly IssueId = 'issueId';
    static readonly Projects = 'Projects';
    static PrioritiesWithIcon: IssuePriorityIcon[] = [
        IssueUtil.getIssuePriorityIcon(IssuePriority.LOWEST),
        IssueUtil.getIssuePriorityIcon(IssuePriority.LOW),
        IssueUtil.getIssuePriorityIcon(IssuePriority.MEDIUM),
        IssueUtil.getIssuePriorityIcon(IssuePriority.HIGH),
        IssueUtil.getIssuePriorityIcon(IssuePriority.HIGHEST),
    ];

    static IssueTypesWithIcon: IssueTypeWithIcon[] = [
        new IssueTypeWithIcon(IssueType.TASK),
        new IssueTypeWithIcon(IssueType.STORY),
        new IssueTypeWithIcon(IssueType.BUG)
    ]
}