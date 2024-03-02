import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { IssueStatus, JIssue } from "../../../../interface/issue";
import { IssueStatusDisplay } from './../../../../interface/issue';
import { Store } from "@ngrx/store";
import { projectActions } from "../../../../state/project/project.actions";

@Component({
    selector: 'issue-status',
    templateUrl: './issue-status.component.html',
    styleUrls: ['./issue-status.component.scss']

})
export class IssueStatusComponent implements OnInit, OnChanges {
    
    @Input() issue!: JIssue;
    IssueStatusDisplay = IssueStatusDisplay; //map
    issueStatusBtnVariants = {
        [IssueStatus.BACKLOG]: 'btn-secondary',
        [IssueStatus.SELECTED]: 'btn-secondary',
        [IssueStatus.INPROGRESS]: 'btn-primary',
        [IssueStatus.DONE]: 'btn-success'
    }
    issueStatusTitles!: IssueStatusValueTitle[];

    constructor(
        private _store: Store
    ) {}

    //not needed since the issue state is updated will update issue input thus update ui
    ngOnChanges(changes: SimpleChanges): void {
        // const issueChanged = changes['issue'];
        // if (issueChanged.currentValue !== issueChanged.previousValue) {
        //     this.issue = issueChanged.currentValue;
        // }
    }

    ngOnInit(): void {
        this.issueStatusTitles = [
            new IssueStatusValueTitle(IssueStatus.BACKLOG),
            new IssueStatusValueTitle(IssueStatus.SELECTED),
            new IssueStatusValueTitle(IssueStatus.INPROGRESS),
            new IssueStatusValueTitle(IssueStatus.DONE)
        ];
    }

    isStatusSelected(issueStatus: IssueStatus) {
        return this.issue.status === issueStatus;
    }

    updateIssue(statusOptionSelected: IssueStatus) {
        this._store.dispatch(projectActions.updateIssue({
            updatedIssue: { ...this.issue, status: statusOptionSelected }
        }))
    }
}

class IssueStatusValueTitle {
    value: IssueStatus;
    label: string;
    constructor(issueStatus: IssueStatus) {
        this.value = issueStatus;
        this.label = IssueStatusDisplay[issueStatus];
    }
}