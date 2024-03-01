import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { JProject } from "../../interface/project";

export const projectActions = createActionGroup({
    source: "Project Events In Project Module",
    events: {
        'Get Project': emptyProps(),
        'Get Project Success': props<{ project: JProject }>(),
        'Get Project Failure': props<{ error: string }>(),
    }
})