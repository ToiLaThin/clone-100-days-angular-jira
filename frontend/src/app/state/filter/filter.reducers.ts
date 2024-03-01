import { createReducer, on } from "@ngrx/store";
import { IFilterState } from "./filterState.interface";
import { filterActions } from "./filter.actions";

export const initialFilterState: IFilterState = {
    searchTerm: "",
    userIds: [],
    onlyMyIssue: false,
    ignoreResolved: false
}

export const filterFeatureKey = "filterFeature";
export const filterReducer = createReducer(
    initialFilterState,
    on(filterActions.searchTermChanged, (
        (state, eventProps) => ({
            ...state,
            searchTerm: eventProps.updatedSearchTerm
        })
    )),
    on(filterActions.userIdsFilterSelectedChanged, (state, eventProps) => {
        const isThisUserIdAlreadySelected = state.userIds.includes(eventProps.selectedUserId);
        const updatedUserIds = isThisUserIdAlreadySelected ?
            state.userIds.filter(userId => userId !== eventProps.selectedUserId) :
            [...state.userIds, eventProps.selectedUserId]; 
        return {
            ...state,
            userIds: updatedUserIds
        }
    }),
    on(filterActions.onlyMyIssueFilterToggled, (state) => ({
        ...state,
        onlyMyIssue: !state.onlyMyIssue
    })),
    on(filterActions.ignoreResolvedFilterToggled, (state) => ({
        ...state,
        ignoreResolved: !state.ignoreResolved
    })),
    on(filterActions.filterResetted, () => initialFilterState)
)