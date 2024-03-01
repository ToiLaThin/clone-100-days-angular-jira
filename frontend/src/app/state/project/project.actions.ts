import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { JProject } from './../../interface/project';
import { JIssue } from "../../interface/issue";
import { JComment } from "../../interface/comment";

export const projectActions = createActionGroup({
    source: "Project Events In Project Module",
    events: {
        'Get Project': emptyProps(),
        'Get Project Success': props<{ project: JProject }>(),
        'Get Project Failure': props<{ error: string }>(),

        'Update Project': props<{ updatedProject: JProject }>(),
        'Update Issue': props<{ updatedIssue: JIssue }>(),       
        
        'Upsert Comment To Issue': props<{ issueId: string, commentToUpsert: JComment }>(),
    }
})