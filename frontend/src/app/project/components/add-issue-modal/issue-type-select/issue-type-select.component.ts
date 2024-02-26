import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { IssueTypeWithIcon } from "../../../../interface/issue-type-icon";
import { ProjectConst } from "../../../config/const";
import { IssueType } from "../../../../interface/issue";
import { IssueUtil } from "../../../utils/issue";

@Component({
    selector: 'issue-type-select',
    templateUrl: './issue-type-select.component.html',
    styleUrls: ['./issue-type-select.component.scss']
})
export class IssueTypeSelectComponent {
    @Input() control!: FormControl;
    issueTypes!: IssueTypeWithIcon[];
    defaultIssueTypeValue!: string;
    constructor() {
        this.issueTypes = ProjectConst.IssueTypesWithIcon;
        this.defaultIssueTypeValue = this.getIssueTypeIcon(IssueType.TASK);
    }

    getIssueTypeIcon(issueType: IssueType) {
        //return lowercase issueType name, not like the name of the function getIssueTypeIcon
        return IssueUtil.getIssueTypeIcon(issueType);
    }

    logValueSelected() {
        console.log(this.control.value);
    }
}