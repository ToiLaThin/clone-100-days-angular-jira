import { Component, Input, OnInit } from "@angular/core";
import { JIssue } from "../../../../interface/issue";
import { JUser } from "../../../../interface/user";

@Component({
    selector: 'issue-assignees',
    templateUrl: './issue-assignees.component.html',
    styleUrls: ['./issue-assignees.component.scss']

})
export class IssueAssigneesComponent implements OnInit {
    @Input() issue!: JIssue;
    @Input() users!: JUser[];
    assignees!: JUser[];

    constructor() {}

    ngOnInit(): void {
        this.assignees = this.issue.userIds.map(userId => this.users.find(user => user.id === userId)!); //O(n^2)
    }

    isUserSelected(user: JUser) {
        return this.issue.userIds.includes(user.id);
    }

}