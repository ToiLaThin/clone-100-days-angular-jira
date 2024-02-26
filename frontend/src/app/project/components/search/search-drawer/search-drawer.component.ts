import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { IssuePriority, IssueStatus, IssueType, JIssue } from "../../../../interface/issue";

@Component({
    selector: 'search-drawer',
    templateUrl: './search-drawer.component.html',
    styleUrls: ['./search-drawer.component.scss']
})
export class SearchDrawerComponent implements OnInit{
    searchControl: FormControl = new FormControl('');
    results!: JIssue[];
    recentIssues!: JIssue[];

    get hasSearchTermInput(): boolean {
        return !!this.searchControl.value; // !== null || !== undefined
    }

    constructor() {}

    ngOnInit(): void {
        //mock data
        this.recentIssues = [
            {
                id: '1',
                title: 'Create a new Angular project',
                description: 'Create a new project to clone 100 days Jira with tailwind, ng-zorro config',
                type: IssueType.TASK,
                status: IssueStatus.DONE,
                priority: IssuePriority.HIGHEST,
                createdAt: '2021-08-01',
                updatedAt: '2021-08-01',
                listPosition: 1,
                timeSpent: 5,
                timeRemaining: 0,
                estimate: 5,
                reporterId: '1',
                userIds: ['1'],
                projectId: '1',
                comments: []
            },
            {
                id: '2',
                title: 'Buid Navigation',
                description: 'Build, Style the navigation left, sidebar, modal, search component for the project',
                type: IssueType.TASK,
                status: IssueStatus.INPROGRESS,
                priority: IssuePriority.HIGH,
                createdAt: '2021-08-01',
                updatedAt: '2021-08-01',
                listPosition: 2,
                timeSpent: 5,
                timeRemaining: 6,
                estimate: 12,
                reporterId: '1',
                userIds: ['1'],
                projectId: '1',
                comments: []
            },
            {
                id: '3',
                title: 'Buid Board',
                description: 'Build, Style all modal, component, etc for the board page',
                type: IssueType.TASK,
                status: IssueStatus.SELECTED,
                priority: IssuePriority.LOW,
                createdAt: '2021-08-01',
                updatedAt: '2021-08-01',
                listPosition: 3,
                timeSpent: 0,
                timeRemaining: 20,
                estimate: 20,
                reporterId: '1',
                userIds: ['1'],
                projectId: '1',
                comments: []
            },
        ]
    }
}