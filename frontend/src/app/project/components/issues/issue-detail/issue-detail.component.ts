import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
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
    @Input() isShowCloseButton!: boolean;
    @Input() isShowFullScreenButton!: boolean;
    @Output() onOpenedIssueFullDetail = new EventEmitter<string>();
    @Output() onClosedModal = new EventEmitter();

    users!: JUser[];

    constructor() {}

    ngOnInit(): void {
        this.users = DummyDataProvider.Users;
    }

    closeModal() {
        this.onClosedModal.emit();
    }

    openIssueFullDetail() {
        this.onOpenedIssueFullDetail.emit(this.issue.id);
    }

}