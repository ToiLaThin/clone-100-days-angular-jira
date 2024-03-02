import { Component, Input, OnInit } from "@angular/core";
import { JIssue } from "../../../../interface/issue";
import { FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";
import { projectActions } from "../../../../state/project/project.actions";

@Component({
    selector: 'issue-title',
    templateUrl: './issue-title.component.html',
    styleUrls: ['./issue-title.component.scss']
})
export class IssueTitleComponent implements OnInit {
    @Input() issue!: JIssue;
    titleControl!: FormControl;

    constructor(
        private _store: Store
    ) {}

    ngOnInit(): void {
        this.titleControl = new FormControl(this.issue.title);
    }

    onBlur() {
        this._store.dispatch(projectActions.updateIssue({
            updatedIssue: { ...this.issue, title: this.titleControl.value}
        }))
    }
}