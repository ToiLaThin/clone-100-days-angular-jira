import { Component, Input, OnInit } from "@angular/core";
import { IssueType, JIssue } from "../../../../interface/issue";
import { IssueUtil } from "../../../utils/issue";
import { IssueTypeWithIcon } from "../../../../interface/issue-type-icon";
import { ProjectConst } from "../../../config/const";
import { Store } from "@ngrx/store";
import { projectActions } from "../../../../state/project/project.actions";

@Component({
    selector: 'issue-type',
    templateUrl: './issue-type.component.html',
    styleUrls: ['./issue-type.component.scss']
})
export class IssueTypeComponent implements OnInit {
    @Input() issue!: JIssue;
    issueTypes!: IssueTypeWithIcon[];
    get selectedIssueTypeIcon() {
        return IssueUtil.getIssueTypeIcon(this.issue.type);
    }

    constructor(
        private _store: Store
    ) {}

    //no need to use ngOnChanges since selectedIssueTypeIcon is a getter and will be updated when issue changes
    ngOnInit(): void {
        this.issueTypes = ProjectConst.IssueTypesWithIcon;
    }

    isTypeSelected(type: IssueType) {
        return this.issue.type == type;
    }

    updateIssue(typeOptionSelected: IssueType) {
        this._store.dispatch(projectActions.updateIssue({
            updatedIssue: { ...this.issue, type: typeOptionSelected }
        }))
    }
}