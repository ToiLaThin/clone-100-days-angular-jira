import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { JIssue } from "../../../../interface/issue";
import { DummyDataProvider } from "../../../config/dummy_data";

@Component({
    selector: 'search-drawer',
    templateUrl: './search-drawer.component.html',
    styleUrls: ['./search-drawer.component.scss']
})
export class SearchDrawerComponent implements OnInit{
    searchControl: FormControl = new FormControl('');
    results!: JIssue[];
    recentIssues!: JIssue[];

    get hasSearchTermInput(): boolean {
        return !!this.searchControl.value; // !== null || !== undefined
    }

    constructor() {}

    ngOnInit(): void {
        //mock data
        this.recentIssues = DummyDataProvider.RecentIssues;
    }
}