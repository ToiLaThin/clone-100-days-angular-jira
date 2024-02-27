import { Component, OnInit } from "@angular/core";
import { JProject, ProjectCategory } from "../../../interface/project";
import { FormBuilder, FormGroup, RequiredValidator } from "@angular/forms";
import { NzNotificationService } from "ng-zorro-antd/notification";
import { Router } from "@angular/router";

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
        private _notification: NzNotificationService
    ) {}

    ngOnInit(): void {
        this.initForm();
        this.categories = [
            ProjectCategory.BUSINESS,
            ProjectCategory.SOFTWARE,
            ProjectCategory.MARKETING,
        ]

        this.project = {
            id: '1',
            name: 'Clone 100 days angular Jira Clone',
            url: 'https://github.com/trungk18/jira-clone-angular',
            description: 'This is a clone of Jira clone project for 100 days angular challenge',
            category: ProjectCategory.SOFTWARE,
            createdAt: '2021-08-01',
            updatedAt: '2021-08-01',
            issues: [],
            users: []
        }
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
        //const formValue: Partial<JProject> = this.projectForm.getRawValue(); //
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