import { Component, Input, OnInit } from "@angular/core";
import { IssueStatus, JIssue } from "../../../../interface/issue";
import { IssueStatusDisplay } from './../../../../interface/issue';

@Component({
    selector: 'issue-status',
    templateUrl: './issue-status.component.html',
    styleUrls: ['./issue-status.component.scss']

})
export class IssueStatusComponent implements OnInit {
    
    @Input() issue!: JIssue;
    IssueStatusDisplay = IssueStatusDisplay; //map
    issueStatusBtnVariants = {
        [IssueStatus.BACKLOG]: 'btn-secondary',
        [IssueStatus.SELECTED]: 'btn-secondary',
        [IssueStatus.INPROGRESS]: 'btn-primary',
        [IssueStatus.DONE]: 'btn-success'
    }
    issueStatusTitles!: IssueStatusValueTitle[];

    constructor() {        
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
}

class IssueStatusValueTitle {
    value: IssueStatus;
    label: string;
    constructor(issueStatus: IssueStatus) {
        this.value = issueStatus;
        this.label = IssueStatusDisplay[issueStatus];
    }
}