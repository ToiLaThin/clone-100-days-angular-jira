import { Component, Input, OnInit } from "@angular/core";
import { JIssue } from "../../../../interface/issue";
import { FormControl } from "@angular/forms";

@Component({
    selector: 'issue-title',
    templateUrl: './issue-title.component.html',
    styleUrls: ['./issue-title.component.scss']
})
export class IssueTitleComponent implements OnInit {
    @Input() issue!: JIssue;
    titleControl!: FormControl;

    constructor() {        
    }

    ngOnInit(): void {
        this.titleControl = new FormControl(this.issue.title);
    }
}