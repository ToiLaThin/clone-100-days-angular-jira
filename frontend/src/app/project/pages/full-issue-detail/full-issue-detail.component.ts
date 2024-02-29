import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { JProject } from "../../../interface/project";
import { JIssue } from "../../../interface/issue";
import { DummyDataProvider } from "../../config/dummy_data";

@Component({
    selector: 'app-full-issue-detail',
    templateUrl: './full-issue-detail.component.html',
    styleUrls: ['./full-issue-detail.component.scss']
})
export class FullIssueDetailComponent implements OnInit {
    issueId!: string;
    project!: JProject;
    issue!: JIssue;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ) {}

    ngOnInit() {
        this.issueId = this._route.snapshot.paramMap.get('id')!;
        if (!this.issueId) {
            this._router.navigate(['/']);
            return;
        }
        this.issue = DummyDataProvider.RecentIssues.find(issue => issue.id === this.issueId)!;
        this.project = DummyDataProvider.Project;
    }
}