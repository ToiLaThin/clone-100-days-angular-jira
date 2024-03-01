import { createReducer, on } from "@ngrx/store";
import { projectActions } from "./project.actions";
import { IProjectState } from "./projectState.interface";
import { DateUtil } from "../../project/utils/date";
import { JComment } from "../../interface/comment";

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
    on(projectActions.getProjectSuccess, (state, eventProps): IProjectState => ({
        ...state,
        project: eventProps.project,
        issues: eventProps.project.issues,
        users: eventProps.project.users,
        error: null
    })),
    on(projectActions.getProjectFailure, (state, { error }) => ({
        ...state,
        error: error
    })),
    on(projectActions.updateProject, (state, eventProps)=> ({
        ...state,
        project: eventProps.updatedProject
    })),
    on(projectActions.updateIssue, (state, eventProps) => {
        let isIssueExisted: boolean = false;
        let updatedIssues = state.issues.map(issue => {
            if (issue.id === eventProps.updatedIssue.id) {
                isIssueExisted = true;
                return {...eventProps.updatedIssue, updatedAt: DateUtil.getNow()};
            }
            return issue;
        })
        if (!isIssueExisted) {
            updatedIssues.push(eventProps.updatedIssue);
        }
        return {
            ...state,
            issues: updatedIssues
        }
    }),
    on(projectActions.upsertCommentToIssue, (state, eventProps) => {
        const issueToUpsertComment = state.issues.find(issue => issue.id === eventProps.issueId);
        if (!issueToUpsertComment) {
            return state;
        }
        let commentFounded: boolean = false;
        let updatedComments: JComment[] = [];
        if (!issueToUpsertComment.comments) {
            updatedComments.push(eventProps.commentToUpsert);
        } else {
            updatedComments = issueToUpsertComment.comments.map(comment => {
            if (comment.id === eventProps.commentToUpsert.id) {
                    commentFounded = true;
                    return eventProps.commentToUpsert;
                }
                return comment;
            })
            if (!commentFounded) {
                updatedComments.push(eventProps.commentToUpsert);
            }
        }
        const updatedIssue = {
            ...issueToUpsertComment,
            comments: updatedComments
        }
        return {
            ...state,
            issues: state.issues.map(issue => issue.id === updatedIssue.id ? updatedIssue : issue)
        }
    })
)