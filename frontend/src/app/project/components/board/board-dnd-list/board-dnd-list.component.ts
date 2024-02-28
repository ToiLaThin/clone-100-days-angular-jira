import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { IssueStatus, JIssue } from "../../../../interface/issue";
import { IssueStatusDisplay } from './../../../../interface/issue';
import { DummyDataProvider } from "../../../config/dummy_data";

@Component({
    selector: 'board-dnd-list',
    templateUrl: './board-dnd-list.component.html',
    styleUrls: ['./board-dnd-list.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BoardDndListComponent implements OnInit {
    @Input() status!: IssueStatus;
    currentUserId!: string;
    issues!: JIssue[];
    IssueStatusDisplay = IssueStatusDisplay;

    get issuesCount() {
        return this.issues.length;
    }

    constructor() {}

    ngOnInit(): void {
        this.issues = DummyDataProvider.RecentIssues.filter(issue => issue.status === this.status);
        this.currentUserId = '1';
    }
}