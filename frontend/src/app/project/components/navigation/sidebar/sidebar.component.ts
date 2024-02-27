import { Component, OnInit } from "@angular/core";
import { SideBarLink } from "../../../../interface/ui-model/nav-link";
import { SideBarLinks } from "../../../config/sidebar";
import { JProject, ProjectCategory } from "../../../../interface/project";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent implements OnInit{
    sideBarLinks!: SideBarLink[];
    project!: JProject;

    get sideBarWidth(): number {
        return 240;
    }
    constructor() {}

    ngOnInit(): void {
        this.sideBarLinks = SideBarLinks; //config const side bar links
        //mock project
        this.project = {
            id: '1',
            name: 'Clone 100 days angular Jira Clone',
            description: 'This is a clone of Jira clone project for 100 days angular challenge',
            category: ProjectCategory.SOFTWARE,
            createdAt: '2021-08-01',
            updatedAt: '2021-08-01',
            issues: [],
            users: []
        }
    }

}