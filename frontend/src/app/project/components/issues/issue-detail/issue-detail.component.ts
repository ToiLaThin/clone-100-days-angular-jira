import { Component, Input, OnInit } from "@angular/core";
import { JIssue } from "../../../../interface/issue";
import { JUser } from "../../../../interface/user";
import { DummyDataProvider } from "../../../config/dummy_data";

@Component({
    selector: 'issue-detail',
    templateUrl: './issue-detail.component.html',
    styleUrls: ['./issue-detail.component.scss']
})
export class IssueDetailComponent implements OnInit {
    @Input() issue!: JIssue;
    users!: JUser[];
    constructor() {}

    ngOnInit(): void {
        this.users = DummyDataProvider.Users;
    }

}