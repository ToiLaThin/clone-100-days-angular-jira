import { Component, Input, OnInit } from "@angular/core";
import { SideBarLink } from "../../../../interface/ui-model/nav-link";
import { SideBarLinks } from "../../../config/sidebar";
import { JProject, ProjectCategory } from "../../../../interface/project";
import { DummyDataProvider } from "../../../config/dummy_data";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SideBarComponent implements OnInit{
    sideBarLinks!: SideBarLink[];
    project!: JProject;
    @Input() expanded!: boolean;

    get sideBarWidth(): number {
        return this.expanded ? 240 : 15;
    }
    constructor() {}

    ngOnInit(): void {
        this.sideBarLinks = SideBarLinks; //config const side bar links
        //mock project
        this.project = DummyDataProvider.Project;
    }

}