import { Component, Input, OnInit } from "@angular/core";
import { IssuePriority, JIssue } from "../../../../interface/issue";
import { IssuePriorityIcon } from "../../../../interface/issue-priority-icon";
import { IssueUtil } from "../../../utils/issue";
import { ProjectConst } from "../../../config/const";

@Component({
    selector: 'issue-priority',
    templateUrl: './issue-priority.component.html',
    styleUrls: ['./issue-priority.component.scss']

})
export class IssuePriorityComponent implements OnInit {
    @Input() issue!: JIssue;
    selectedPriority!: IssuePriority;
    allPrioritiesWIcon!: IssuePriorityIcon[];

    get selectedPriorityIcon() {
        return IssueUtil.getIssuePriorityIcon(this.selectedPriority);
    }
    constructor() {}

    ngOnInit(): void {
        this.selectedPriority = this.issue.priority;
        this.allPrioritiesWIcon = ProjectConst.PrioritiesWithIcon;
    }

    isPrioritySelected(priority: IssuePriority) {
        return this.selectedPriority === priority;
    }
}