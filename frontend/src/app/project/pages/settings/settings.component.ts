import { Component, OnInit } from "@angular/core";
import { JProject, ProjectCategory } from "../../../interface/project";
import { FormBuilder, FormGroup, RequiredValidator } from "@angular/forms";
import { NzNotificationService } from "ng-zorro-antd/notification";
import { Router } from "@angular/router";
import { DummyDataProvider } from "../../config/dummy_data";
import { Store } from "@ngrx/store";
import { projectActions } from "../../../state/project/project.actions";

@Component({
    selector: 'app-project-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class ProjectSettingsComponent implements OnInit{
    project!: JProject;
    projectForm!: FormGroup;
    categories!: ProjectCategory[];

    constructor(
        private _fb: FormBuilder,
        private _router: Router,
        private _notification: NzNotificationService,
        private _store: Store
    ) {}

    ngOnInit(): void {
        this.initForm();
        this.categories = [
            ProjectCategory.BUSINESS,
            ProjectCategory.SOFTWARE,
            ProjectCategory.MARKETING,
        ]

        //this.project$ = this._store.select...
        this.project = DummyDataProvider.Project;
        this.updateForm(this.project);
    }

    initForm() {
        this.projectForm = this._fb.group({
            name: [''],
            url: [''],
            description: '',
            category: [ProjectCategory.SOFTWARE]
        });
    }

    updateForm(project: JProject) {
        this.projectForm.patchValue({
            name: project.name,
            url: project.url,
            description: project.description,
            category: project.category
        });
    }

    submitForm() {
        const formValue: Partial<JProject> = this.projectForm.getRawValue(); //
        this._store.dispatch(projectActions.updateProject({
            updatedProject: {
                ...this.project,
                ...formValue
            }
        }));
        //popup in top right corner
        this._notification.create(
            'success', 
            'Changes have been saved successfully ', 
            ''
        );
    }

    cancel() {
        this._router.navigate(['/']);
    }
}