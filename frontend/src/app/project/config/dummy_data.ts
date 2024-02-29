import { IssuePriority, IssueStatus, IssueType, JIssue } from "../../interface/issue";
import { JProject, ProjectCategory } from "../../interface/project";
import { JUser } from "../../interface/user";

//provider data when not having state managenment, to be replaced by real data
export class DummyDataProvider {
    static readonly Users: JUser[] = [
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
    ];

    static readonly Project: JProject = {
        id: '1',
        name: 'Clone 100 days angular Jira Clone',
        url: 'https://github.com/trungk18/jira-clone-angular',
        description: 'This is a clone of Jira clone project for 100 days angular challenge',
        category: ProjectCategory.SOFTWARE,
        createdAt: '2021-08-01',
        updatedAt: '2021-08-01',
        issues: [],
        users: this.Users
    }
    static readonly RecentIssues: JIssue[] = [
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
            userIds: ['1', '2'],
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