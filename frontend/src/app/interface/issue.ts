export enum IssueType {
    STORY = 'Story',
    TASK = 'Task',
    BUG = 'Bug'
}

export enum IssueStatus {
    BACKLOG = 'Backlog',
    SELECTED = 'Selected',
    INPROGRESS = 'InProgress',
    DONE = 'Done'
}
export const IssueStatusDisplay = {
    //syntax for enum as key
    [IssueStatus.BACKLOG]: 'Backlog',
    [IssueStatus.SELECTED]: 'Selected for Development',
    [IssueStatus.INPROGRESS]: 'In Progress',
    [IssueStatus.DONE]: 'Done'
}

export enum IssuePriority {
    LOWEST = 'Lowest',
    LOW = 'Low',
    MEDIUM = 'Medium',
    HIGH = 'High',
    HIGHEST = 'Highest'
}

export const IssuePriorityColors = {
    [IssuePriority.LOWEST]: '#CD1317',
    [IssuePriority.LOW]: '#E9494A',
    [IssuePriority.MEDIUM]: '#E97F33',
    [IssuePriority.HIGH]: '2D8738',
    [IssuePriority.HIGHEST]: '#57A55A'
};

export interface JIssue {
    id: string;
    title: string;
    type: string;
    status: string;
    priority: number;
    listPosition: number;
    description: string;
    estimate: number;
    timeSpent: number;
    timeRemaining: number;
    createdAt: string;
    updatedAt: string;
    reporterId: string;
    userIds: string[];
    comment: string;
    projectId: string;
}