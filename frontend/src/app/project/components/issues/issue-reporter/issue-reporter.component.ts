import { Component, Input, OnInit } from "@angular/core";
import { JIssue } from "../../../../interface/issue";
import { JUser } from "../../../../interface/user";

@Component({
    selector: 'issue-reporter',
    templateUrl: './issue-reporter.component.html',
    styleUrls: ['./issue-reporter.component.scss']

})
export class IssueReporterComponent implements OnInit {
    @Input() issue!: JIssue;
    @Input() users!: JUser[];
    reporter!: JUser;

    constructor() {        
    }

    ngOnInit(): void {
        this.reporter = this.users.find(user => user.id === this.issue.reporterId)!;
    }

    isUserSelected(user: JUser) {
        return this.reporter.id === user.id;
    }
}