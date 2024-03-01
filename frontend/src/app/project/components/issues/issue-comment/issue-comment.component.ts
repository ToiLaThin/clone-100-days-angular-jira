import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from "@angular/core";
import { JComment } from "../../../../interface/comment";
import { FormControl } from "@angular/forms";
import { JUser } from "../../../../interface/user";
import { DummyDataProvider } from "../../../config/dummy_data";
import { Store } from "@ngrx/store";
import { projectActions } from "../../../../state/project/project.actions";

@Component({
    selector: 'issue-comment',
    templateUrl: './issue-comment.component.html',
    styleUrls: ['./issue-comment.component.scss']
})
export class IssueCommentComponent implements OnInit {
    @Input() comment!: JComment;
    @Input() issueId!: string;
    @Input() createMode!: boolean;

    @ViewChild('commentBoxRef') commentBoxRef!: ElementRef;
    commentControl!: FormControl;
    user!: JUser;
    isEditing!: boolean;

    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if (!this.createMode || this.isEditing) {
            return; 
        }
        if (event.key === 'm' || event.key === 'M') {
            this.commentBoxRef.nativeElement.focus();
            this.setCommentEdit(true);
        }
    }
    constructor(
        private _store: Store
    ) {}

    ngOnInit(): void {
        this.commentControl = new FormControl('');
        this.user = DummyDataProvider.Users[0]; //current auth user
        if (this.createMode) {
            this.comment = new JComment(this.issueId, this.user);
        }
        if (this.createMode) {
            this.setCommentEdit(false);
        }
    }

    setCommentEdit(mode: boolean) {
        this.isEditing = mode;
    }    

    addComment() {
        const now = new Date();
        this._store.dispatch(projectActions.upsertCommentToIssue({
            issueId: this.issueId,
            commentToUpsert: {
                ...this.comment,
                id: `${now.getTime()}`,
                createdAt: now.toISOString(),
                updatedAt: now.toISOString(),
                body: this.commentControl.value
            }
        }));
        this.cancelAddComment()
    }


    cancelAddComment() {
        this.commentControl.patchValue('');
        this.setCommentEdit(false);
    }
}