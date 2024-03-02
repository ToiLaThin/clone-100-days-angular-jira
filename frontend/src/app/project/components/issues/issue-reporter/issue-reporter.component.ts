import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { JIssue } from "../../../../interface/issue";
import { JUser } from "../../../../interface/user";
import { Store } from "@ngrx/store";
import { projectActions } from "../../../../state/project/project.actions";

@Component({
    selector: 'issue-reporter',
    templateUrl: './issue-reporter.component.html',
    styleUrls: ['./issue-reporter.component.scss']

})
export class IssueReporterComponent implements OnInit, OnChanges {
    @Input() issue!: JIssue;
    @Input() users!: JUser[];
    reporter!: JUser;

    constructor(
        private _store: Store
    ) {}

    //use ngOnChanges to update the reporter when the issue changes, since the state changed is issue, ngOnInit(where the assignment happend) only called once
    ngOnChanges(changes: SimpleChanges): void {
        const issueChanged = changes['issue'];
        if (this.users && issueChanged.currentValue !== issueChanged.previousValue) {//changed and have users to find reporter
            this.reporter = this.users.find(user => user.id === this.issue.reporterId)!;
        }
    }

    ngOnInit(): void {
        this.reporter = this.users.find(user => user.id === this.issue.reporterId)!;
    }

    isUserSelected(user: JUser) {
        return this.reporter.id === user.id;
    }

    updateIssue(selectedReporterOption: JUser) {
        //this.reporter = selectedReporterOption; //to update the UI immediately or use ngOnChanges
        this._store.dispatch(projectActions.updateIssue({
            updatedIssue: { ...this.issue, reporterId: selectedReporterOption.id }
        }))
    }
}