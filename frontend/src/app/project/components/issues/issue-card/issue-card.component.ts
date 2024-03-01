import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { JIssue } from "../../../../interface/issue";
import { JUser } from "../../../../interface/user";
import { DummyDataProvider } from "../../../config/dummy_data";
import { IssueUtil } from "../../../utils/issue";
import { NzModalService } from "ng-zorro-antd/modal";
import { IssueModalComponent } from "../issue-modal/issue-modal.component";
import { Subscription } from "rxjs";
import { Store } from "@ngrx/store";
import { selectorUsers } from "../../../../state/project/project.selectors";
import { projectFeatureKey } from "../../../../state/project/project.reducers";
import { IProjectState } from "../../../../state/project/projectState.interface";

@Component({
    selector: 'issue-card',
    templateUrl: './issue-card.component.html',
    styleUrls: ['./issue-card.component.scss']
})
export class IssueCardComponent implements OnInit, OnDestroy {
    @Input() issue!: JIssue;
    issueAssignees!: JUser[];
    usersSubscription!: Subscription;

    get currentIssueTypeIcon() {
        return IssueUtil.getIssueTypeIcon(this.issue.type);
    }

    get currentIssuePriorityIcon() {
        return IssueUtil.getIssuePriorityIcon(this.issue.priority);
    }
    constructor(
        private _modalService: NzModalService,
        private _store: Store
    ) {}

    ngOnDestroy(): void {
        this.usersSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.usersSubscription = this._store.select((state) => selectorUsers(state as { [projectFeatureKey]: IProjectState })).subscribe(allUsers => {
            this.issueAssignees = this.issue.userIds.map(userId => {
                return allUsers.find(user => user.id === userId)!;
            });
        });
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