import { Component, Input } from "@angular/core";
import { JIssue } from "../../../../interface/issue";
import { IssueUtil } from "../../../utils/issue";

@Component({
    selector: 'issue-result',
    templateUrl: './issue-result.component.html',
    styleUrls: ['./issue-result.component.scss']
})
export class IssueResultComponent {
    @Input() issue!: JIssue;

    get issueTypeIcon() {
        return IssueUtil.getIssueTypeIcon(this.issue.type);
    }
}