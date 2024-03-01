import { Component, Inject, Input, OnInit } from "@angular/core";
import { NzModalRef } from "ng-zorro-antd/modal";
import { JIssue } from "../../../../interface/issue";
import { DummyDataProvider } from "../../../config/dummy_data";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { selectorIssueOfId } from "../../../../state/project/project.selectors";
import { Observable } from "rxjs";
import { DeleteIssueModel } from "../../../../interface/ui-model/delete-issue-model";
import { projectActions } from "../../../../state/project/project.actions";

@Component({
    selector: 'issue-modal',
    templateUrl: './issue-modal.component.html',
    styleUrls: ['./issue-modal.component.scss']
})
export class IssueModalComponent implements OnInit {
    issueSelected$!: Observable<JIssue>
    constructor(
        private _modal: NzModalRef,
        private _router: Router,  
        private _store: Store      
    ) {}

    ngOnInit(): void {
        this.issueSelected$ = this._modal.getConfig().nzData.issueSelected$;
    }

    closeModal() {
        this._modal.close();
    }

    openIssuePage(issueId: string) {
        this.closeModal();
        console.log(issueId);
        
        this._router.navigate(['/project','issue',issueId]);
    }

    //event shape is $event: DeleteIssueModel
    deleteIssue({issueId, deleteModelRef}: DeleteIssueModel) {
        this._store.dispatch(projectActions.deleteIssue({issueId}));
        deleteModelRef.close();
        this.closeModal(); //must have this line to close the modal delete too
    }
}