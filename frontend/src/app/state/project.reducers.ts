import { createReducer, on } from "@ngrx/store";
import { projectActions } from "./project.actions";
import { IProjectState } from "./projectState.interface";

export const initialProjectState: IProjectState = {
    project: null,
    error: null,
    issues: [],
    users: []
}

export const projectFeatureKey = "projectFeature";
export const projectReducer = createReducer(
    initialProjectState,
    on(projectActions.getProject, (state) => ({ ...state})),
    on(projectActions.getProjectSuccess, (state, action): IProjectState => ({
        ...state,
        project: action.project,
        issues: action.project.issues,
        users: action.project.users,
        error: null
    })),
    on(projectActions.getProjectFailure, (state, { error }) => ({
        ...state,
        error: error
    }))
)