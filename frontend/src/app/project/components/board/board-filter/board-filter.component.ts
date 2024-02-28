import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { JProject, ProjectCategory } from "../../../../interface/project";
import { JUser } from "../../../../interface/user";
import { DummyDataProvider } from "../../../config/dummy_data";
@Component({
    selector: 'board-filter',
    templateUrl: './board-filter.component.html',
    styleUrls: ['./board-filter.component.scss']
})
export class BoardFilterComponent implements OnInit {
    searchControl: FormControl = new FormControl('')
    userIds!: string[];
    userIdSelected!: string;
    project!: JProject;
    constructor() {}

    ngOnInit(): void {
        //mock data
        this.userIds = DummyDataProvider.Users.map(user => user.id);
        this.project = DummyDataProvider.Project;
    }

    userChanged(user: JUser) {
        this.userIdSelected = user.id;
    }

    isUserSelected(user: JUser) {
        return this.userIdSelected === user.id;
    }

    resetAll() {}

}