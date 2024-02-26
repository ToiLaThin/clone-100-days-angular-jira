import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { IssuePriorityIcon } from "../../../../interface/issue-priority-icon";
import { ProjectConst } from "../../../config/const";
import { IssueUtil } from "../../../utils/issue";
import { IssuePriority } from "../../../../interface/issue";

@Component({
    selector: 'issue-priority-select',
    templateUrl: './issue-priority-select.component.html',
    styleUrls: ['./issue-priority-select.component.scss']
})
export class IssuePrioritySelectComponent {
    @Input() control!: FormControl;
    priorities!: IssuePriorityIcon[];
    defaultPriorityValue!: string;

    constructor() {
        this.priorities = ProjectConst.PrioritiesWithIcon;
        this.defaultPriorityValue = this.getPriorityIcon(IssuePriority.MEDIUM).value;
    }

    getPriorityIcon(priority: IssuePriority) {
        return IssueUtil.getIssuePriorityIcon(priority);
    }
}