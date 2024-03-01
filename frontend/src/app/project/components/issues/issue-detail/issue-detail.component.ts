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
import { DeleteIssueModel } from "../../../../interface/ui-model/delete-issue-model";
import { NzModalService } from "ng-zorro-antd/modal";
import { IssueDeleteModalComponent } from "../issue-delete-modal/issue-delete-modal.component";

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
    @Output() onDeleteIssueEventEmitter = new EventEmitter<DeleteIssueModel>(); 
    //pass this output event emitter to the modal component since it does load through service
    //when modal delete button is clicked, it will emit the event to the parent component of issue-detail (from modal com => this => parent component)
    //even though we can call store.dispatch directly from the modal component, but it's better to keep the logic in the parent component

    users$!: Observable<JUser[]>;

    constructor(
        private _store: Store,
        private _modalService: NzModalService
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

    openDeleteIssueModal() {
        this._modalService.create({
            nzTitle: undefined,
            nzContent: IssueDeleteModalComponent,
            nzFooter: null,
            nzClosable: false,
            nzStyle: {
                top: '20px'
            },
            nzData: {
                issueId: this.issue.id,
                onDelete: this.onDeleteIssueEventEmitter          
            }
        })
    }

}