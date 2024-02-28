import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, RequiredValidator } from "@angular/forms";
import { NzModalRef } from "ng-zorro-antd/modal";
import { IssuePriority, IssueType } from "../../../interface/issue";
import { JUser } from "../../../interface/user";
import { DummyDataProvider } from "../../config/dummy_data";

@Component({
    selector: 'app-add-issue-modal',
    templateUrl: './add-issue-modal.component.html',
    styleUrls: ['./add-issue-modal.component.scss']
})
export class AddIssueModalComponent implements OnInit{
    issueForm!: FormGroup;
    reporterUsers!: JUser[];
    assignees!: JUser[];
    constructor(
        private _fb: FormBuilder,
        private _modalRef: NzModalRef
    ) {}

    ngOnInit(): void {
        this.initForm();
        //mock data
        this.reporterUsers = DummyDataProvider.Users;

        this.assignees = DummyDataProvider.Users;
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
    }

    cancel() {
        this.closeModal();
    }

    closeModal() {
        this._modalRef.close();
    }
}