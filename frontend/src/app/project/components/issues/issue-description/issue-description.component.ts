import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { JIssue } from "../../../../interface/issue";
import { quillConfiguration } from "../../../config/editor";
import { FormControl } from "@angular/forms";
import { Store } from "@ngrx/store";
import { projectActions } from "../../../../state/project/project.actions";

@Component({
    selector: 'issue-description',
    templateUrl: './issue-description.component.html',
    styleUrls: ['./issue-description.component.scss']
})
export class IssueDescriptionComponent implements OnInit, OnChanges {
    @Input() issue!: JIssue;
    isEditing: boolean = false; //by default this is false anyway
    isWorking: boolean = false;
    editorOptions = quillConfiguration;
    descriptionControl!: FormControl;

    constructor(
        private _store: Store
    ) {}
    
    ngOnChanges(changes: SimpleChanges): void {
        const issueChanged = changes['issue'];
        console.log("Is First Change?: ", changes['issue'].firstChange);
        if (issueChanged.currentValue !== issueChanged.previousValue) {
            this.descriptionControl = new FormControl(this.issue.description);
        }
    }

    ngOnInit(): void {
        //for sure, but the first time input is passed in, the ngOnChanges will be called anyway, so this is not necessary
        this.descriptionControl = new FormControl(this.issue.description);
    }

    setEditMode(mode: boolean) {
        this.isEditing = mode;
    }

    saveChanges() {
        this._store.dispatch(projectActions.updateIssue({
            updatedIssue: {
                ...this.issue,
                description: this.descriptionControl.value
            }
        }));
        //no need to update descriptionControl value here, because it will be updated by onChanges
        this.setEditMode(false);
    }

    cancelEdit() {
        this.descriptionControl.patchValue(this.issue.description); //return to old value
        this.setEditMode(false);
    }

    editorCreated(event: any) {
        console.log("Editor Created: ", event);
        console.log("Event Type: ", typeof event);
        if (event && event.focus) {
            event.focus();
        }
    }
}