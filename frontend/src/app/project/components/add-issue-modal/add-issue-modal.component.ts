import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, RequiredValidator } from "@angular/forms";
import { NzModalRef } from "ng-zorro-antd/modal";
import { IssuePriority, IssueStatus, IssueType, JIssue } from "../../../interface/issue";
import { JUser } from "../../../interface/user";
import { DummyDataProvider } from "../../config/dummy_data";
import { Store } from "@ngrx/store";
import { selectorUsers } from "../../../state/project/project.selectors";
import { projectFeatureKey } from "../../../state/project/project.reducers";
import { IProjectState } from "../../../state/project/projectState.interface";
import { Observable, tap } from "rxjs";
import { IssueUtil } from "../../utils/issue";
import { projectActions } from "../../../state/project/project.actions";
import { quillConfiguration } from "../../config/editor";

@Component({
    selector: 'app-add-issue-modal',
    templateUrl: './add-issue-modal.component.html',
    styleUrls: ['./add-issue-modal.component.scss']
})
export class AddIssueModalComponent implements OnInit{
    issueForm!: FormGroup;
    reporterUsers$!: Observable<JUser[]>;
    assignees$!: Observable<JUser[]>;
    editorOptions = quillConfiguration
    constructor(
        private _fb: FormBuilder,
        private _modalRef: NzModalRef,
        private _store: Store
    ) {}

    ngOnInit(): void {
        this.initForm();
        //mock data
        this.reporterUsers$ = this._store.select((state) => selectorUsers(state as { [projectFeatureKey]: IProjectState})).pipe(
            tap((users) => {
                const [user0] = users; //destructuring array to get the first element
                this.issueForm.controls['reporterId'].patchValue(user0.id);
            }
        ));

        this.assignees$ = this._store.select((state) => selectorUsers(state as { [projectFeatureKey]: IProjectState}));
    }
    
    // get f(): any{
    //     //short hand to get the form controls only by calling
    //     return this.issueForm.controls.;
    // }
    initForm() {
        this.issueForm = this._fb.group({
            type: [IssueType.TASK],
            priority: [IssuePriority.MEDIUM],
            title: ['', new RequiredValidator()],
            description: [''],
            reporterId: [''],
            userIds: [[]]
        })
    }

    submitForm() {
        console.log(this.issueForm.value);
        if (this.issueForm.invalid) {
            return;
        }
        const now = new Date();
        const issueToCreate: JIssue = {
            ...this.issueForm.getRawValue(), //have body but it's empty since not binding to the form control
            description: 'lorem ipsum dolor sit amet...',
            id: IssueUtil.getRandomId(),
            status: IssueStatus.BACKLOG,
            createdAt: now,
            updatedAt: now
        }
        this._store.dispatch(projectActions.updateIssue({
            updatedIssue: issueToCreate
        }));
        this.closeModal();
    }

    cancel() {
        this.closeModal();
    }

    closeModal() {
        this._modalRef.close();
    }
}