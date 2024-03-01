import { createSelector } from '@ngrx/store';
import { projectFeatureKey } from './project.reducers';
import { IProjectState } from './projectState.interface';

export const selectProjectFeature = (state: { [projectFeatureKey]: IProjectState }) =>
    state[projectFeatureKey];

export const selectorProject = createSelector(
    selectProjectFeature,
    projectState => projectState.project
)
export const selectorIssues = createSelector(
    selectProjectFeature,
    projectState => projectState.issues
)
export const selectorUsers = createSelector(
    selectProjectFeature,
    projectState => projectState.users
)