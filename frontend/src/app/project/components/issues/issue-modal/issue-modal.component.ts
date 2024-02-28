import { Component, Input, OnInit } from "@angular/core";
import { NzModalRef } from "ng-zorro-antd/modal";
import { JIssue } from "../../../../interface/issue";
import { DummyDataProvider } from "../../../config/dummy_data";

@Component({
    selector: 'issue-modal',
    templateUrl: './issue-modal.component.html',
    styleUrls: ['./issue-modal.component.scss']
})
export class IssueModalComponent implements OnInit {
    issue!: JIssue;
    constructor(
        private _modal: NzModalRef
    ) {}

    ngOnInit(): void {
        //use state later, now user mock data
        this.issue = DummyDataProvider.RecentIssues.find(issue => issue.id === '1')!;
    }

    closeModal() {
        this._modal.close();
    }
}