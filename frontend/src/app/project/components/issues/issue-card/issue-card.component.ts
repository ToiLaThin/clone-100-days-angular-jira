import { Component, Input, OnInit } from "@angular/core";
import { JIssue } from "../../../../interface/issue";
import { JUser } from "../../../../interface/user";
import { DummyDataProvider } from "../../../config/dummy_data";
import { IssueUtil } from "../../../utils/issue";

@Component({
    selector: 'issue-card',
    templateUrl: './issue-card.component.html',
    styleUrls: ['./issue-card.component.scss']
})
export class IssueCardComponent implements OnInit {
    @Input() issue!: JIssue;
    assignees!: JUser[];

    get currentIssueTypeIcon() {
        return IssueUtil.getIssueTypeIcon(this.issue.type);
    }

    get currentIssuePriorityIcon() {
        return IssueUtil.getIssuePriorityIcon(this.issue.priority);
    }
    constructor() {}

    ngOnInit(): void {
        this.assignees = this.issue.userIds.map(userId => {
            return DummyDataProvider.Users.find(user => user.id === userId)!;
        })
    }
}