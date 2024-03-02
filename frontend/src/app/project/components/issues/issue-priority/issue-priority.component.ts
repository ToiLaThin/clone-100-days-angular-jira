import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IssuePriority, JIssue } from '../../../../interface/issue';
import { IssuePriorityIcon } from '../../../../interface/issue-priority-icon';
import { IssueUtil } from '../../../utils/issue';
import { ProjectConst } from '../../../config/const';
import { Store } from '@ngrx/store';
import { projectActions } from '../../../../state/project/project.actions';

@Component({
    selector: 'issue-priority',
    templateUrl: './issue-priority.component.html',
    styleUrls: ['./issue-priority.component.scss']
})
export class IssuePriorityComponent implements OnInit, OnChanges {
    @Input() issue!: JIssue;
    selectedPriority!: IssuePriority;
    allPrioritiesWIcon!: IssuePriorityIcon[];

    get selectedPriorityIcon() {
        return IssueUtil.getIssuePriorityIcon(this.selectedPriority);
    }
    constructor(private _store: Store) {}

    //use ngOnChanges to update the priority when the issue changes, since the state changed is issue & ngOnInit(where the assignment this.selectedPriority = this.issue.priority; happend) only called once
    ngOnChanges(changes: SimpleChanges): void {
        const issueChanged = changes['issue'];
        if (issueChanged.currentValue !== issueChanged.previousValue) {
            this.selectedPriority = this.issue.priority;
        }
    }

    ngOnInit(): void {
        this.selectedPriority = this.issue.priority;
        this.allPrioritiesWIcon = ProjectConst.PrioritiesWithIcon;
    }

    isPrioritySelected(priority: IssuePriority) {
        return this.selectedPriority === priority;
    }

    updateIssue(priorityOptionSelected: IssuePriority) {
        this._store.dispatch(
            projectActions.updateIssue({
                updatedIssue: { ...this.issue, priority: priorityOptionSelected }
            })
        );
    }
}
