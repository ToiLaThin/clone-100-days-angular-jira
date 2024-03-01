import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProjectState } from '../project/projectState.interface';
import { projectFeatureKey } from '../project/project.reducers';
import { IFilterState } from './filterState.interface';
import { filterFeatureKey } from './filter.reducers';
import { IssueUtil } from '../../project/utils/issue';
import { IssueStatus, JIssue } from '../../interface/issue';

const selectLocalProjectFeature = createFeatureSelector<IProjectState>(projectFeatureKey);
const selectLocalFilterFeature = createFeatureSelector<IFilterState>(filterFeatureKey);

export const selectorSearchResultIssues = createSelector(
    selectLocalProjectFeature,
    selectLocalFilterFeature,
    (projectState, filterState) => {
        return projectState.issues.filter((issue) => {
            const foundInTitle = IssueUtil.searchString(issue.title, filterState.searchTerm);
            const foundInDescription = IssueUtil.searchString(
                issue.description,
                filterState.searchTerm
            );
            return foundInDescription || foundInTitle;
        });
    }
);

export const selectorRecentIssues = createSelector(selectLocalProjectFeature, (projectState) => {
    return projectState.issues.slice(0, 5);
});

export const selectorUserIdsFiltered = createSelector(
    selectLocalFilterFeature,
    (filterState) => filterState.userIds
);

export const selectorIgnoreResolved = createSelector(
    selectLocalFilterFeature,
    (filterState) => filterState.ignoreResolved
);

export const selectorOnlyMyIssue = createSelector(
    selectLocalFilterFeature,
    (filterState) => filterState.onlyMyIssue
);

export const selectorIssuesAppliedBoardFilter = (
    issuesAfterSortedAndFilteredByStatus: JIssue[],
    currentUserId: string
) =>
    createSelector(selectLocalFilterFeature, (filterState) => {
        const { onlyMyIssue, ignoreResolved, userIds, searchTerm } = filterState; //object destructuring
        const selectedUserIdsOnFilter = userIds; //alias for easier to understand
        return issuesAfterSortedAndFilteredByStatus.filter((issue) => {
            const isMatchSearchTerm = searchTerm
                ? IssueUtil.searchString(issue.title, searchTerm)
                : true; //if no search term, then it's pass this filter

            const isIncludeUsers =
                selectedUserIdsOnFilter.length > 0
                    ? issue.userIds.some((userId) => selectedUserIdsOnFilter.includes(userId))
                    : true; //if issue have assigned that is selected on filter, then it's pass this filter

            const isOnlyMyIssue = onlyMyIssue ? issue.userIds.includes(currentUserId) : true; //if onlyMyIssue is true, then it's pass this filter

            const isIgnoreResolved = ignoreResolved ? issue.status !== IssueStatus.DONE : true; //if issue status is not done, then it's pass this filter (if ignoreResolved flag is true)
            return isMatchSearchTerm && isIncludeUsers && isOnlyMyIssue && isIgnoreResolved; //if an issue pass all 4 conditions, then it's kept in the list
        });
    });
