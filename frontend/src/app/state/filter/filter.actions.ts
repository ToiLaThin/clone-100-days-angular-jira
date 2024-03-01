import { createActionGroup, emptyProps, props } from "@ngrx/store";

export const filterActions = createActionGroup({
    source: "Filter Events In Project Module",
    events: {
        "Search Term Changed": props<{ updatedSearchTerm: string}>(),
        "User Ids Filter Selected Changed": props<{ selectedUserId: string }>(),
        "Only My Issue Filter Toggled": emptyProps(),
        "Ignore Resolved Filter Toggled": emptyProps(),
        "Filter Resetted": emptyProps(),
    }
})