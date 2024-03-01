import { createSelector } from '@ngrx/store';
import { projectFeatureKey } from './project.reducers';
import { IProjectState } from './projectState.interface';
import { IssueStatus } from '../../interface/issue';

export const selectProjectFeature = (state: { [projectFeatureKey]: IProjectState }) =>
    state[projectFeatureKey];

export const selectorProject = createSelector(
    selectProjectFeature,
    (projectState) => projectState.project
);
export const selectorIssues = createSelector(
    selectProjectFeature,
    (projectState) => projectState.issues
);
export const selectorUsers = createSelector(
    selectProjectFeature,
    (projectState) => projectState.users
);

// a function that takes a status and returns a selector
export const selectorSortedIssuesFilterdByStatus = (status: IssueStatus) =>
    createSelector(selectProjectFeature, (projectState) => {
        return projectState.issues
            .filter((issue) => issue.status === status)
            .sort((a, b) => a.listPosition - b.listPosition);
    });
