import { IssueUtil } from "../project/utils/issue";
import { IssueType } from "./issue";

export class IssueTypeWithIcon {
    value!: IssueType;
    icon!: string;
    constructor(issueType: IssueType) {
        this.value = issueType;
        //icon la lower case cua type
        this.icon = IssueUtil.getIssueTypeIcon(issueType);
    }
}