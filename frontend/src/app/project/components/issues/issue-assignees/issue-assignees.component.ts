import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { JIssue } from "../../../../interface/issue";
import { JUser } from "../../../../interface/user";
import { Store } from "@ngrx/store";
import { projectActions } from "../../../../state/project/project.actions";

@Component({
    selector: 'issue-assignees',
    templateUrl: './issue-assignees.component.html',
    styleUrls: ['./issue-assignees.component.scss']

})
export class IssueAssigneesComponent implements OnInit, OnChanges {
    @Input() issue!: JIssue;
    @Input() users!: JUser[];
    assignees!: JUser[];

    constructor(
        private _store: Store
    ) {}

    ngOnChanges(changes: SimpleChanges): void {
        const issueChanged = changes['issue'];
        if (issueChanged.currentValue !== issueChanged.previousValue) {
            this.assignees = this.issue.userIds.map(userId => this.users.find(user => user.id === userId)!); //O(n^2)
        }
    }

    ngOnInit(): void {
        this.assignees = this.issue.userIds.map(userId => this.users.find(user => user.id === userId)!); //O(n^2)
    }

    isUserSelected(user: JUser) {
        return this.issue.userIds.includes(user.id);
    }

    removeAssignee(assignee: JUser) {
        this._store.dispatch(projectActions.updateIssue({
            updatedIssue: { ...this.issue, userIds: this.issue.userIds.filter(userId => userId !== assignee.id) }
        }))
    }

    addAssignee(selectedAssigneeOption: JUser) {
        this._store.dispatch(projectActions.updateIssue({
            updatedIssue: { ...this.issue, userIds: [...this.issue.userIds, selectedAssigneeOption.id] }
        }))
    }

}