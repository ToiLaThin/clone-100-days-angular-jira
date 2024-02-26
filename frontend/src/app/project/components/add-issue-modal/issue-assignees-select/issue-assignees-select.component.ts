import { Component, Input, ViewEncapsulation } from "@angular/core";
import { FormControl } from "@angular/forms";
import { JUser } from "../../../../interface/user";

@Component({
    selector: 'issue-assignees-select',
    templateUrl: './issue-assignees-select.component.html',
    styleUrls: ['./issue-assignees-select.component.scss'],
    encapsulation: ViewEncapsulation.None 
    //for the style to apply to nz-select
})
export class IssueAssigneesSelectComponent {
    @Input() control!: FormControl;
    @Input() users!: JUser[];

    constructor() {}

    getUser(userId: string) {
        return this.users.find(user => user.id === userId);
    }

}