import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, RequiredValidator } from "@angular/forms";
import { NzModalRef } from "ng-zorro-antd/modal";
import { IssuePriority, IssueType } from "../../../interface/issue";

@Component({
    selector: 'app-add-issue-modal',
    templateUrl: './add-issue-modal.component.html',
    styleUrls: ['./add-issue-modal.component.scss']
})
export class AddIssueModalComponent implements OnInit{
    issueForm!: FormGroup;
    constructor(
        private _fb: FormBuilder,
        private _modalRef: NzModalRef
    ) {}

    ngOnInit(): void {
        this.initForm();
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

    cancel() {
        this.closeModal();
    }
    closeModal() {
        this._modalRef.close();
    }
}