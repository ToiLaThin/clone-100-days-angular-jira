import { Component, EventEmitter, OnInit } from "@angular/core";
import { NzModalRef } from "ng-zorro-antd/modal";
import { DeleteIssueModel } from "../../../../interface/ui-model/delete-issue-model";
import { Store } from "@ngrx/store";
import { projectActions } from "../../../../state/project/project.actions";

@Component({
    selector: 'issue-delete-modal',
    templateUrl: './issue-delete-modal.component.html',
    styleUrls: ['./issue-delete-modal.component.scss']
})
// delete event emiiter but this component is load through service, not by template in parent component
export class IssueDeleteModalComponent implements OnInit{
    issueId!: string;
    onDelete!: EventEmitter<DeleteIssueModel>;

    constructor(
        private _modalRef: NzModalRef,
    ) {}

    ngOnInit(): void {
        this.issueId = this._modalRef.getConfig().nzData.issueId;
        this.onDelete = this._modalRef.getConfig().nzData.onDelete;
    }

    deleteIssue() {
        this.onDelete.emit(new DeleteIssueModel(this.issueId, this._modalRef));
        //close modal will be done in the parent component handle event emitter since we pass the modal ref to the parent component
    }

    closeModal() {
        this._modalRef.close();
    }
}