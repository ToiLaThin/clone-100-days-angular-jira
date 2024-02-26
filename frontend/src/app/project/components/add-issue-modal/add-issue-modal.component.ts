import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, RequiredValidator } from "@angular/forms";
import { NzModalRef } from "ng-zorro-antd/modal";
import { IssuePriority, IssueType } from "../../../interface/issue";
import { JUser } from "../../../interface/user";

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
        this.reporterUsers = [
            {
                id: '1',
                name: 'John Doe',
                email: 'johndoe@gmail.com',
                avatarUrl: 'https://gravatar.com/avatar/edb6107ee43142de92e4bfcdc2de4133?s=400&d=robohash&r=x',
                createdAt: '2021-08-01',
                updatedAt: '2021-08-01',
                issueIds: []
            },
            {
                id: '2',
                name: 'Jane Doe',
                email: 'janedoe@gmail.com',
                avatarUrl: 'https://robohash.org/edb6107ee43142de92e4bfcdc2de4133?set=set3&bgset=&size=400x400',
                createdAt: '2021-08-01',
                updatedAt: '2021-08-01',
                issueIds: []
            },
            {
                id: '3',
                name: 'John Smith',
                email: 'johnsmith@gmail.com',
                avatarUrl: 'https://robohash.org/edb6107ee43142de92e4bfcdc2de4133?set=set2&bgset=&size=400x400',
                createdAt: '2021-08-01',
                updatedAt: '2021-08-01',
                issueIds: []
            }
        ]

        this.assignees = this.reporterUsers;
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