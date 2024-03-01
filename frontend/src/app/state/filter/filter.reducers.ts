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
    ))
)