import { Component, Input, OnInit } from "@angular/core";
import { JIssue } from "../../../../interface/issue";

@Component({
    selector: 'issue-detail',
    templateUrl: './issue-detail.component.html',
    styleUrls: ['./issue-detail.component.scss']
})
export class IssueDetailComponent implements OnInit {
    @Input() issue!: JIssue;

    constructor() {}

    ngOnInit(): void {
        console.log(this.issue);
    }

}