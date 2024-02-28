import { Component, Input, OnInit } from "@angular/core";
import { IssueStatus, JIssue } from "../../../../interface/issue";
import { IssueStatusDisplay } from './../../../../interface/issue';

@Component({
    selector: 'board-dnd-list',
    templateUrl: './board-dnd-list.component.html',
    styleUrls: ['./board-dnd-list.component.scss']
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
        this.issues = [];
        this.currentUserId = '1';
    }
}