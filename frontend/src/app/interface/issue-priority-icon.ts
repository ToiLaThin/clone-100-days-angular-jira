import { IssuePriority, IssuePriorityColors } from './issue';
export class IssuePriorityIcon {
    //will get the value of icon , color from the enum priority passedin
    icon!: string;
    value!: string;
    color!: string;

    constructor(issuePriority: IssuePriority) {
        const lowerPriorities = [IssuePriority.LOWEST, IssuePriority.LOW];
        this.value = issuePriority;
        this.icon = lowerPriorities.includes(issuePriority) ? 'arrow-down' : 'arrow-up';
        this.color = IssuePriorityColors[issuePriority];
    }
}