import { Component, Input, OnInit } from "@angular/core";
import { IssueType, JIssue } from "../../../../interface/issue";
import { IssueUtil } from "../../../utils/issue";
import { IssueTypeWithIcon } from "../../../../interface/issue-type-icon";
import { ProjectConst } from "../../../config/const";

@Component({
    selector: 'issue-type',
    templateUrl: './issue-type.component.html',
    styleUrls: ['./issue-type.component.scss']
})
export class IssueTypeComponent implements OnInit {
    @Input() issue!: JIssue;
    issueTypes!: IssueTypeWithIcon[];
    get selectedIssueTypeIcon() {
        return IssueUtil.getIssueTypeIcon(this.issue.type);
    }

    constructor() {
    }

    ngOnInit(): void {
        this.issueTypes = ProjectConst.IssueTypesWithIcon;
    }

    isTypeSelected(type: IssueType) {
        return this.issue.type == type;
    }
}