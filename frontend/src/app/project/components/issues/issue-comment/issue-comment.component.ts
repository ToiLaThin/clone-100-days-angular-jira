import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from "@angular/core";
import { JComment } from "../../../../interface/comment";
import { FormControl } from "@angular/forms";
import { JUser } from "../../../../interface/user";
import { DummyDataProvider } from "../../../config/dummy_data";

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
    constructor() {}

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

    cancelAddComment() {
        this.commentControl.patchValue('');
        this.setCommentEdit(false);
    }
}