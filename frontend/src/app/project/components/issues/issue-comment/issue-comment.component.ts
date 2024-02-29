import { Component, Input } from "@angular/core";
import { JComment } from "../../../../interface/comment";

@Component({
    selector: 'issue-comment',
    templateUrl: './issue-comment.component.html',
    styleUrls: ['./issue-comment.component.scss']
})
export class IssueCommentComponent {
    @Input() comment!: JComment;
    @Input() issueId!: string;
}