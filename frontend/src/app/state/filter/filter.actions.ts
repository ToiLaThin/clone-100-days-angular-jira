import { createActionGroup, props } from "@ngrx/store";

export const filterActions = createActionGroup({
    source: "Filter Events In Project Module",
    events: {
        "Search Term Changed": props<{ updatedSearchTerm: string}>(),
    }
})