import { Component, Input, OnInit } from "@angular/core";
import { JIssue } from "../../../../interface/issue";
import { JUser } from "../../../../interface/user";
import { DummyDataProvider } from "../../../config/dummy_data";
import { IssueUtil } from "../../../utils/issue";
import { NzModalService } from "ng-zorro-antd/modal";
import { IssueModalComponent } from "../issue-modal/issue-modal.component";

@Component({
    selector: 'issue-card',
    templateUrl: './issue-card.component.html',
    styleUrls: ['./issue-card.component.scss']
})
export class IssueCardComponent implements OnInit {
    @Input() issue!: JIssue;
    assignees!: JUser[];

    get currentIssueTypeIcon() {
        return IssueUtil.getIssueTypeIcon(this.issue.type);
    }

    get currentIssuePriorityIcon() {
        return IssueUtil.getIssuePriorityIcon(this.issue.priority);
    }
    constructor(private _modalService: NzModalService) {}

    ngOnInit(): void {
        this.assignees = this.issue.userIds.map(userId => {
            return DummyDataProvider.Users.find(user => user.id === userId)!;
        })
    }

    openIssueModal(issueId: string) {
        this._modalService.create({
            nzContent: IssueModalComponent,
            nzWidth: 1040,
            nzClosable: false,
            nzFooter: null,
            // nzComponentParams: {
            //     //input data for the modal: @Input() issue!: JIssue;
            //     issue: DummyDataProvider.RecentIssues.find(issue => issue.id === issueId)!
            // }
        })
    }
}