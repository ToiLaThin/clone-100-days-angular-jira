import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { JProject, ProjectCategory } from "../../../../interface/project";
import { JUser } from "../../../../interface/user";
@Component({
    selector: 'board-filter',
    templateUrl: './board-filter.component.html',
    styleUrls: ['./board-filter.component.scss']
})
export class BoardFilterComponent implements OnInit {
    searchControl: FormControl = new FormControl('')
    userIds!: string[];
    userIdSelected!: string;
    project!: JProject;
    constructor() {}

    ngOnInit(): void {
        //mock data
        this.userIds = ['1', '2', '3'];
        this.project = {
            id: '1',
            name: 'Clone 100 days angular Jira Clone',
            url: 'https://github.com/trungk18/jira-clone-angular',
            description: 'This is a clone of Jira clone project for 100 days angular challenge',
            category: ProjectCategory.SOFTWARE,
            createdAt: '2021-08-01',
            updatedAt: '2021-08-01',
            issues: [],
            users: [
                {
                    id: '1',
                    name: 'John Doe',
                    email: 'johndoe@gmail.com',
                    avatarUrl: 'https://gravatar.com/avatar/edb6107ee43142de92e4bfcdc2de4133?s=400&d=robohash&r=x',
                    createdAt: '2021-08-01',
                    updatedAt: '2021-08-01',
                    issueIds: []
                },
                {
                    id: '2',
                    name: 'Jane Doe',
                    email: 'janedoe@gmail.com',
                    avatarUrl: 'https://robohash.org/edb6107ee43142de92e4bfcdc2de4133?set=set3&bgset=&size=400x400',
                    createdAt: '2021-08-01',
                    updatedAt: '2021-08-01',
                    issueIds: []
                },
                {
                    id: '3',
                    name: 'John Smith',
                    email: 'johnsmith@gmail.com',
                    avatarUrl: 'https://robohash.org/edb6107ee43142de92e4bfcdc2de4133?set=set2&bgset=&size=400x400',
                    createdAt: '2021-08-01',
                    updatedAt: '2021-08-01',
                    issueIds: []
                }
            ]
        }
    }

    userChanged(user: JUser) {
        this.userIdSelected = user.id;
    }

    isUserSelected(user: JUser) {
        return this.userIdSelected === user.id;
    }

    resetAll() {}

}