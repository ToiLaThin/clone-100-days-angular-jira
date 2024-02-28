import { Component, OnInit } from "@angular/core";
import { IssueStatus } from "../../../../interface/issue";

@Component({
    selector: 'board-dnd',
    templateUrl: './board-dnd.component.html',
    styleUrls: ['./board-dnd.component.scss']
})
export class BoardDndComponent implements OnInit{
    issueStatuses!: IssueStatus[];

    constructor() {}

    ngOnInit(): void {
        this.issueStatuses = [
            IssueStatus.BACKLOG,
            IssueStatus.DONE,
            IssueStatus.INPROGRESS,
            IssueStatus.SELECTED,
        ]
    }
}