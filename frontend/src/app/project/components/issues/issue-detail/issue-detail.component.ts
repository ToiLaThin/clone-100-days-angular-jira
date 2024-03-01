import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { JIssue } from "../../../../interface/issue";
import { JUser } from "../../../../interface/user";
import { DummyDataProvider } from "../../../config/dummy_data";
import { Store } from "@ngrx/store";
import { selectorUsers } from "../../../../state/project/project.selectors";
import { projectFeatureKey } from "../../../../state/project/project.reducers";
import { JProject } from "../../../../interface/project";
import { Observable } from "rxjs";
import { IProjectState } from "../../../../state/project/projectState.interface";

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

    users$!: Observable<JUser[]>;

    constructor(
        private _store: Store
    ) {}

    ngOnInit(): void {
        this.users$ = this._store.select(state => selectorUsers(state as {[projectFeatureKey]: IProjectState}))
    }

    closeModal() {
        this.onClosedModal.emit();
    }

    openIssueFullDetail() {
        this.onOpenedIssueFullDetail.emit(this.issue.id);
    }

}