import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IProjectState } from "../project/projectState.interface";
import { projectFeatureKey } from "../project/project.reducers";
import { IFilterState } from "./filterState.interface";
import { filterFeatureKey } from "./filter.reducers";
import { IssueUtil } from "../../project/utils/issue";
import { selectorIssues } from './../project/project.selectors';

const selectLocalProjectFeature = createFeatureSelector<IProjectState>(projectFeatureKey);
const selectLocalFilterFeature = createFeatureSelector<IFilterState>(filterFeatureKey);

export const selectorSearchResultIssues = createSelector(
    selectLocalProjectFeature,
    selectLocalFilterFeature,
    (projectState, filterState) => {
        return projectState.issues.filter(issue => {
            const foundInTitle = IssueUtil.searchString(issue.title, filterState.searchTerm);
            const foundInDescription = IssueUtil.searchString(issue.description, filterState.searchTerm);
            return foundInDescription || foundInTitle;
        });
    }
)

export const selectorRecentIssues = createSelector(
    selectLocalProjectFeature,
    (projectState) => {
        return projectState.issues.slice(0, 5);
    }
)